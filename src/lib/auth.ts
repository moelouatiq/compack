import { SignJWT, jwtVerify } from 'jose'

function getSecret() {
  return new TextEncoder().encode(
    process.env.ADMIN_SECRET || 'compack-admin-secret-fallback-2026'
  )
}

export async function signToken(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('8h')
    .sign(getSecret())
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload
  } catch {
    return null
  }
}
