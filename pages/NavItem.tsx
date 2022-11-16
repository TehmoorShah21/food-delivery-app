import Link from 'next/link'

export default function NavItem({
  href,
  text,
  active,
}: {
  href: string
  text: string
  active: boolean
}) {
  return (
    <Link href={href} className={`nav__link ${active ? 'active' : ''}`}>
      {text}
    </Link>
  )
}
