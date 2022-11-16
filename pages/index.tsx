import styles from '../styles/Home.module.scss'
import Checkout from './Checkout'
import CreateAccount from './CreateAccount'
import Download from './Download'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Varietites from './Varieties'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <CreateAccount />
      <Varietites />
      <Checkout />
      <Download />
      <Footer />
    </div>
  )
}
