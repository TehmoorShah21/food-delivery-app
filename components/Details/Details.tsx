import styles from './Details.module.sass'
import Detail from 'components/Detail/Detail'
import { DetailsContentType } from 'components/utils'

const DETAILS_CONTENT: DetailsContentType[] = [
  {
    src: '/Images/mob1.png',
    subtitle: 'Create an account',
    title: 'Create/login to an existing account to get started',
    details:
      'An account to get started An account is created with your email and a desired password',
  },
  {
    src: '/Images/mob2.png',
    subtitle: 'Explore varieties',
    title: 'Shop for your favorites meal as e dey hot.',
    details: 'Shop for your favorite meals or drinks and enjoy while doing it.',
  },
  {
    src: '/Images/mob3.png',
    subtitle: 'Checkout',
    title: 'When you done check out and get it delivered.',
    details: 'When you done check out and get it delivered with ease.',
  },
]

function Details() {
  return (
    <div className={styles.detailsContainer}>
      {DETAILS_CONTENT.map((item, index) => {
        return (
          <div key={index}>
            <Detail item={item} index={index} />
          </div>
        )
      })}
    </div>
  )
}

export default Details
