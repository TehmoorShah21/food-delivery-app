import Image from 'next/image'
import styles from './Detail.module.sass'
interface DetailProps {
  src: string
  subtitle: string
  title: string
  details: string
}

function Detail({ src, subtitle, title, details }: DetailProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src={src} height={525} width={302} alt="Mobile Image" />
        <div>
          <h3>{subtitle}</h3>
          <h2>{title}</h2>
          <h4>{details}</h4>
        </div>
      </div>
    </div>
  )
}

export default Detail
