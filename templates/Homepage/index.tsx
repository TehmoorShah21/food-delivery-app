import Hero from 'components/Hero/Hero'
import Navbar from 'components/Navbar/Navbar'
import styles from './HomePage.module.sass'
import React from 'react'

const Home = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Hero />
    </div>
  )
}
export default Home
