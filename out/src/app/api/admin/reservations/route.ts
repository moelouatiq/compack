import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

async function isAuthenticated(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value
  if (!token) return false
  return !!(await verifyToken(token))
}

export async function GET(req: NextRequest) {
  if (!(await isAuthenticated(req))) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 })
  }

  const reservations = await prisma.reservation.findMany({
    orderBy: { arrival: 'asc' },
  })
  return NextResponse.json(reservations)
}
