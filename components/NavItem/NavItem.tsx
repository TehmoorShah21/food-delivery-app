import Link from 'next/link'

type NavLinkProps = {
  text: string
  active: boolean
  href: string
}

export default function NavItem({ href, text, active }: NavLinkProps) {
  return (
    <div>
      <Link href={href} className={`nav__link ${active ? 'active' : ''}`}>
        {text}
      </Link>
    </div>
  )
}
