import { DetailsContentType } from 'components/utils'
import Image from 'next/image'
import styles from './Detail.module.sass'

interface DetailProps {
  item: DetailsContentType
  index: number
}

function Detail({ item, index }: DetailProps) {
  return (
    <div className={styles.container}>
      {index == 1 ? (
        <div className={styles.contentReverse}>
          <Image
            className={styles.img}
            src={item?.src}
            height={525}
            width={302}
            alt="Mobile Image"
          />
          <div>
            <h3>{item?.subtitle}</h3>
            <h2>{item?.title}</h2>
            <h4>{item?.details}</h4>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <Image
            className={styles.img}
            src={item?.src}
            height={525}
            width={302}
            alt="Mobile Image"
          />
          <div>
            <h3>{item?.subtitle}</h3>
            <h2>{item?.title}</h2>
            <h4>{item?.details}</h4>
          </div>
        </div>
      )}
    </div>
  )
}

export default Detail
