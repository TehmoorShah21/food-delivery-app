import NavItem from '../NavItem/NavItem'

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
      Nabar
      <nav>
        <div className="logo"></div>

        <div className="nav__menu-bar">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="nav__menu-list">
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
