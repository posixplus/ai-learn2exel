import Nav from '@/components/layout/Nav'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
