import Hero from 'components/Hero/Hero'
import Navbar from 'components/Navbar/Navbar'
import styles from './HomePage.module.sass'
import React from 'react'
import Details from 'components/Details/Details'
// import Detail from 'components/Detail/Detail'

const Home = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Hero />
      <Details />
      {/* <Detail
        src="/Images/mob1.png"
        subtitle="Create an account"
        title="Create/login to an existing
        account to get started"
        details="An account is created with your email
        and a desired password"
      /> */}
    </div>
  )
}
export default Home
