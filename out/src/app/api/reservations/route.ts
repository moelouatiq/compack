import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { sendConfirmationToClient, sendNotificationToAdmin } from '@/lib/mailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      nom, email, phone,
      domeType, domeLabel,
      arrival, departure, nights, persons,
      packageType, packageLabel, totalPrice,
      message,
    } = body

    // Basic validation
    if (!nom || !email || !arrival || !departure || !domeType) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 })
    }

    // Save to database
    const reservation = await prisma.reservation.create({
      data: {
        nom, email, phone: phone || null,
        domeType, domeLabel,
        arrival, departure,
        nights: Number(nights),
        persons: Number(persons),
        packageType, packageLabel,
        totalPrice: Number(totalPrice),
        message: message || null,
      },
    })

    // Send emails (non-blocking — don't fail the request if email fails)
    const emailData = {
      id: reservation.id,
      nom: reservation.nom,
      email: reservation.email,
      phone: reservation.phone,
      domeLabel: reservation.domeLabel,
      arrival: reservation.arrival,
      departure: reservation.departure,
      nights: reservation.nights,
      persons: reservation.persons,
      packageLabel: reservation.packageLabel,
      totalPrice: reservation.totalPrice,
      message: reservation.message,
      createdAt: reservation.createdAt,
    }

    await Promise.allSettled([
      sendConfirmationToClient(emailData),
      sendNotificationToAdmin(emailData),
    ])

    return NextResponse.json({ success: true, id: reservation.id }, { status: 201 })
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error('[POST /api/reservations]', err)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
