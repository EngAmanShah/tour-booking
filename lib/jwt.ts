import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export enum Role {
  USER = 'user',
  ADMIN = 'admin',
}

const JWT_SECRET = process.env.JWT_SECRET as string

if (!JWT_SECRET) {
  throw new Error('Please define the JWT_SECRET environment variable inside .env.local')
}

export interface JWTPayload {
  userId: string
  email: string
  role: Role
  name: string
}

export interface IUser {
  _id: string | any
  email: string
  role: Role
  name: string
}

// Generate JWT token
export function generateToken(user: IUser): string {
  const payload: JWTPayload = {
    userId: (user._id as string).toString(),
    email: user.email,
    role: user.role,
    name: user.name,
  }

  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

// Verify JWT token
export function verifyToken(token: string): JWTPayload {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload
  } catch (error) {
    throw new Error('Invalid token')
  }
}

// Extract token from request
export function extractTokenFromRequest(req: NextRequest): string | null {
  const token = req.cookies.get('token')?.value
  return token || null
}

// Extract token from cookies (server component)
export async function extractTokenFromCookies(): Promise<string | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  return token || null
}

// Verify admin token
export async function verifyAdminToken(req: NextRequest): Promise<JWTPayload> {
  const token = extractTokenFromRequest(req)

  if (!token) {
    throw new Error('No token provided')
  }

  const decoded = verifyToken(token)

  if (decoded.role !== Role.ADMIN) {
    throw new Error('Unauthorized: Admin access required')
  }

  return decoded
}

// Verify user token (any role)
export async function verifyUserToken(req: NextRequest): Promise<JWTPayload> {
  const token = extractTokenFromRequest(req)

  if (!token) {
    throw new Error('No token provided')
  }

  return verifyToken(token)
}