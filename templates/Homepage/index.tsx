import Footer from 'components/Footer/Footer'
import React from 'react'
import styles from './HomePage.module.sass'
//import Hero from 'components/Hero/Hero'
//import Navbar from 'components/Navbar/Navbar'
//import Details from 'components/Details/Details'

const Home = () => {
  return (
    <div className={styles.layout}>
      {/* <Navbar />
      <Hero />
      <Details /> */}
      <Footer />
    </div>
  )
}
export default Home
