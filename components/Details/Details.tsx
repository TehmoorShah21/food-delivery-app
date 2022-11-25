// import Detail from 'components/Detail/Detail'

import Detail from 'components/Detail/Detail'

const DETAILS_CONTENT = [
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
    <div>
      {DETAILS_CONTENT.map((d, index) => {
        return (
          <div key={index}>
            {' '}
            <Detail {...d} />{' '}
          </div>
        )
      })}
    </div>
  )
}

export default Details
