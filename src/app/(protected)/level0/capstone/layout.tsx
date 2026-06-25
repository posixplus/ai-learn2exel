import type { Metadata } from 'next'
import { capstoneMetadata } from '@/lib/seo'

export const metadata: Metadata = capstoneMetadata(0)

export default function CapstoneLayout({ children }: { children: React.ReactNode }) {
  return children
}
