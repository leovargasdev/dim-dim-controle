import Image from 'next/image'
import styles from './page.module.scss'

export const metadata = {
  title: 'Dim Dim Controle'
}

const HomePage = () => (
  <div className={styles.container}>
    <Image src="/logo.png" width={205} height={70} quality={100} alt="logo" />
  </div>
)

export default HomePage
