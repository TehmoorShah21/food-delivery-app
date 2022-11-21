import Link from 'next/link'
import styles from './NavItem.module.sass'
type NavLinkProps = {
  text: string
  active: boolean
  href: string
}

export default function NavItem({ href, text, active }: NavLinkProps) {
  return (
    <div>
      <Link
        href={href}
        className={`nav_item ${styles.nav_item} ${active ? 'active' : ''}`}
      >
        {text}
      </Link>
    </div>
  )
}
