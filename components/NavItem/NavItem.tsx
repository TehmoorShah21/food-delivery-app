import Link from 'next/link'
import styles from './NavItem.module.sass'
import cn from 'classnames'

type NavLinkProps = {
  text: string
  active: boolean
  href: string
}

export default function NavItem({ href, text, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(styles.navItem, {
        [styles.active]: active,
      })}
    >
      {text}
    </Link>
  )
}
