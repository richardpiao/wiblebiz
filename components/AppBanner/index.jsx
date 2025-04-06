import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

export default function AppBanner() {
  return (
    <div className={styles.banner}>
      <h2 className={styles.title}>기아 비즈 App 지금 만나보세요!</h2>
      <div className={styles.buttons}>
        <Link
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <Image
            src="/logo_googleplay.svg"
            alt="Google Play"
            width={32}
            height={32}
          />
          <span>Google Play</span>
        </Link>

        <Link
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          <Image
            src="/logo_appstore.svg"
            alt="App Store"
            width={32}
            height={32}
          />
          <span>App Store</span>
        </Link>
      </div>
    </div>
  )
}
