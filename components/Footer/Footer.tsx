import styles from './Footer.module.sass'
function Footer() {
  return (
    <div>
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
    </div>
  )
}

export default Footer
