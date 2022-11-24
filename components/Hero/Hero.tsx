import Adverstisment from 'components/Advertisment/Advertisment'
import styles from './Hero.module.sass'
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_img}>
        <div className={styles.hero_content}>
          <div className={styles.hero_content_inner}>
            <p>Food app</p>
            <h2>Why stay hungry when you can order from Bella Onojies</h2>
            <p>Download the bella onojes food app now on</p>
          </div>
          <div className={styles.btn_group}>
            <button
              className={styles.btn}
              onClick={() => console.log('Clicked')}
            >
              Playstore
            </button>
            <button className={styles.btn}>App store</button>
          </div>
        </div>
      </div>
      <div className={styles.advertisment}>
        <Adverstisment
          src="/Images/mobile.png"
          width={548}
          height={640}
          alt="Mobile Image"
        />
      </div>
      <div className={styles.hr}></div>
      <p className={styles.hrPara}>How the app works</p>
      <div className={styles.hr_mobile}></div>
    </div>
  )
}
