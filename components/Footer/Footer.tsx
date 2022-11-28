import styles from './Footer.module.sass'
import FacebookIcon from 'components/Icons/FacebookIcon'
import InstaIcon from 'components/Icons/InstaIcon'
import TwitterIcon from 'components/Icons/TwitterIcon'
import Image from 'next/image'
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <div className={styles.heroContent}>
            <div className={styles.heroContentInner}>
              <h2>Download the app now.</h2>
              <p>
                Available on your favorite store. Start your premium experience
                now
              </p>
            </div>
            <div className={styles.btnGroup}>
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
      </div>
      <div className={styles.footerBar}>
        <div className={styles.logo}>
          <Image
            src={'/Images/logo.png'}
            width={150}
            height={50}
            alt={'title'}
          />
        </div>
        <div className={styles.icons}>
          <TwitterIcon />
          <FacebookIcon />
          <InstaIcon />
        </div>
        <div className={styles.copyright}>
          <p>Copywright 2020 Bella Onojie.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
