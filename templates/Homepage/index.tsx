import React from 'react'
import styles from './HomePage.module.sass'
import Navbar from 'components/Navbar/Navbar'
import Hero from 'components/Hero/Hero'
import Details from 'components/Details/Details'
import Footer from 'components/Footer/Footer'
const Home = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Hero />
      <Details />
      <Footer />
    </div>
  )
}
export default Home
