// import Image from 'next/image'
import Navbar from '../Navbar/Navbar'
// import Hero from 'components/assests/Hero.png'
import styles from './Header.module.sass'
export default function Header() {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* <div className={styles.img_container}>
        <Image
          src={Hero}
          className={styles.img}
          layout="fill"
          alt={'Hero Background'}
        />
      </div>
      <div className={styles.img_content}>
        <p>Food app</p>
        <h1>Why stay hungry when you can order from Bella Onojies</h1>
        <p>Download the bella onojes food app now on</p>
        <div>
          <button className={styles.btn}>Playstore</button>
          <button className={styles.btn}>App store</button>
        </div>
      </div> */}
    </div>
  )
}
