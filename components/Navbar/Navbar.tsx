import NavItem from '../NavItem/NavItem'
import styles from './Navbar.module.sass'
import Image from 'next/image'
import logo from 'components/assests/logo.png'
const MENU_LIST = [
  {
    text: 'Home',
    href: '/',
    active: true,
  },
  {
    text: 'Product',
    href: '/about',
    active: false,
  },
  {
    text: 'Faq',
    href: '/contact',
    active: false,
  },
  {
    text: 'About',
    href: 'about',
    active: false,
  },
]
export default function Navbar() {
  return (
    <div>
      <nav className={styles.container}>
        <div className="logo">
          <Image src={logo} width="150" height="50" alt={'title'} />
        </div>

        <div className={styles.nav__menu}>
          {MENU_LIST.map((menu) => {
            return (
              <div key={menu.text}>
                <NavItem {...menu} />
              </div>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
