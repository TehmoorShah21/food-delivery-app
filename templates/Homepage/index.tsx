import Hero from 'components/Hero/Hero'
import Navbar from 'components/Navbar/Navbar'
import styles from './HomePage.module.sass'
import React from 'react'
import Details from 'components/Details/Details'

const Home = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Hero />
      <Details />
    </div>
  )
}
export default Home
