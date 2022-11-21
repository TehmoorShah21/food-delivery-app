import Navbar from '../Navbar/Navbar'

import styles from './Header.module.sass'
export default function Header() {
  return (
    <div className={styles.container}>
      <div>
        <Navbar />
      </div>
    </div>
  )
}
