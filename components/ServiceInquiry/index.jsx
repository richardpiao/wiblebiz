import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

export default function ServiceInquiry() {
  return (
    <div className={styles.serviceInquiry}>
      <h2 className={styles.title}>서비스 문의</h2>

      <div className={styles.grid}>
        <Link href="/kia.pdf" download className={styles.card}>
          <Image src="/ic_download.svg" alt="Download" width={32} height={32} />
          <div className={styles.textGroup}>
            <strong>서비스 제안서 다운로드</strong>
          </div>
        </Link>
        <Link href="https://wiblebiz.kia.com/Counsel" className={styles.card}>
          <Image src="/ic_write.svg" alt="Write" width={32} height={32} />
          <div className={styles.textGroup}>
            <strong>상담문의 등록하기</strong>
          </div>
        </Link>

        <Link
          href="https://pf.kakao.com/_xfLxjdb"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <Image src="/ic_talk.svg" alt="KakaoTalk" width={32} height={32} />
          <div className={styles.textGroup}>
            <strong>카톡으로 문의하기</strong>
            <span className={styles.subText}>ID : 기아 비즈</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
