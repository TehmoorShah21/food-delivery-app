// import hero_img from 'components/assests/hero_img.png'
// import Image from 'next/image'
import styles from './Hero.module.sass'
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_img}>
        <div className={styles.hero_content}>
          <div className={styles.hero_content_inner}>
            <p>Food app</p>
            <h1>Why stay hungry when you can order from Bella Onojies</h1>
            <p>Download the bella onojes food app now on</p>

            <button className={styles.btn}>Playstore</button>
            <button className={styles.btn}>App store</button>
          </div>
        </div>
      </div>
    </div>
  )
}
