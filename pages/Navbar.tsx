import Link from 'next/link'
import NavItem from './NavItem'
// import Image from 'next/image'
// import menubar from './assests/menubar.png'
// const MyImage = () => {
//   return (
//     <Image src={menubar} alt="Picture of the author" width={500} height={500} />
//   )
// }

const MENU_LIST = [
  {
    text: 'Home',
    href: '/',
    active: false,
  },
  {
    text: 'Product',
    href: '/product',
    active: false,
  },
  {
    text: 'Faq',
    href: '/faq',
    active: false,
  },
  {
    text: 'about',
    href: '/about',
    active: false,
  },
]
export default function Navbar() {
  return (
    <div>
      <nav>
        <Link href={'/'} legacyBehavior>
          <a>Logo here</a>
        </Link>
        <div className="nav__menu-bar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="nav__menu-list">
          <div>
            {MENU_LIST.map((menu) => {
              return <div key={menu.text}>{<NavItem {...menu} />}</div>
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}
