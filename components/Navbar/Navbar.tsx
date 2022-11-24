import NavItem from '../NavItem/NavItem'
import styles from './Navbar.module.sass'
import Image from 'next/image'
import logo from 'components/assests/logo.png'
import menu from 'components/assests/menu.png'
import cn from 'classnames'

import { useState } from 'react'

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
  const [active, setactive] = useState(false)
  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.container, {
          [styles.active]: active,
        })}
      >
        <div className="logo">
          <Image src={logo} width={150} height={50} alt={'title'} />
        </div>
        <div className={styles.hamburger}>
          <Image
            className="bar_img"
            src={menu}
            width="40"
            height="20"
            alt={'title'}
            onClick={() => {
              !active ? setactive(true) : setactive(false)
            }}
          />
        </div>
        <div className={styles.menuList}>
          {MENU_LIST.map((menu) => (
            <div className={styles.navItems} key={menu.text}>
              <NavItem {...menu} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
