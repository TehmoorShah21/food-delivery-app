import Image from 'next/image'
import styles from './Advertisment.module.sass'

interface ImageProps {
  src: string
  height: number
  width: number
  alt: string
}
export default function Adverstisment({ src, height, width, alt }: ImageProps) {
  return (
    <Image
      className={styles.img}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  )
}
