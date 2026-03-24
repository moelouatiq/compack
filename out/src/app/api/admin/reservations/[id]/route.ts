import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

async function isAuthenticated(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  if (!token) return false
  return !!(await verifyToken(token))
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated(req))) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { id } = await params
  const { status } = await req.json()
  const allowed = ['en_attente', 'confirmé', 'annulé']
  if (!allowed.includes(status)) {
    return NextResponse.json({ error: 'Statut invalide' }, { status: 400 })
  }

  const reservation = await prisma.reservation.update({
    where: { id: Number(id) },
    data: { status },
  })
  return NextResponse.json(reservation)
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated(req))) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const { id } = await params
  await prisma.reservation.delete({ where: { id: Number(id) } })
  return NextResponse.json({ success: true })
}
