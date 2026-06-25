import type { Metadata } from 'next'
import { toolMetadata } from '@/lib/seo'

export const metadata: Metadata = toolMetadata(
  'Certificate of Completion',
  'Earn a printable certificate after completing all lessons of the free AI for Everyone course.',
  '/certificate',
)

export default function CertificateLayout({ children }: { children: React.ReactNode }) {
  return children
}
