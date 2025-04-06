import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.desktop}>
        <div className={styles.left}>
          <Image
            src="/svg/logo_kia.svg"
            alt="KIA Logo"
            width={120}
            height={56}
          />
          <p className={styles.copyright}>
            © 2023 KIA CORP. All Rights Reserved.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <Link href="#">개인정보 처리방침</Link>
            <Link href="#">이용약관</Link>
          </div>
          <p className={styles.address}>
            서울특별시 서초구 헌릉로 12&nbsp;&nbsp;기아㈜&nbsp;&nbsp;대표:
            송호성, 최준영&nbsp;&nbsp; 사업자등록번호:
            119-81-02316&nbsp;&nbsp;통신판매번호: 2006-07935&nbsp;&nbsp;
            고객센터: 1833-4964&nbsp;&nbsp;제휴문의:{' '}
            <Link href="mailto:kiabiz@kia.com">kiabiz@kia.com</Link>
          </p>
        </div>
      </div>

      <div className={styles.mobile}>
        <div className={styles.links}>
          <Link href="#">개인정보 처리방침</Link>
          <Link href="#">이용약관</Link>
        </div>
        <p className={styles.address}>
          서울특별시 서초구 헌릉로 12 기아㈜ 대표: 송호성, 최준영
          <br />
          사업자등록번호: 119-81-02316
          <br />
          통신판매번호: 2006-07935
          <br />
          고객센터: 1833-4964
          <br />
          제휴문의: <Link href="mailto:kiabiz@kia.com">kiabiz@kia.com</Link>
        </p>
        <Image src="/svg/logo_kia.svg" alt="KIA Logo" width={120} height={56} />
        <p className={styles.copyright}>
          © 2023 KIA CORP. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
