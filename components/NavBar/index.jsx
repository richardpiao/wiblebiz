import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'

const NavBar = () => {
  const navLinks = [
    {
      name: '서비스 소개',
      href: 'https://wiblebiz.kia.com/Guide',
      external: true,
    },
    { name: '자주 묻는 질문', href: '/FAQ', external: false },
    { name: '새소식', href: 'https://wiblebiz.kia.com/News', external: true },
    {
      name: '상담문의',
      href: 'https://wiblebiz.kia.com/Counsel',
      external: true,
    },
  ]

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/svg/logo_kiabiz.svg"
          alt="Kia Biz Logo"
          width={140}
          height={80}
          priority
        />
      </Link>

      <input
        type="checkbox"
        id="menu-toggle"
        className={styles.toggleCheckbox}
      />
      <label htmlFor="menu-toggle" className={styles.menuIcon}>
        <span className={styles.hamburger}></span>
      </label>

      <nav className={styles.desktopNav}>
        {navLinks.map(({ name, href, external }) =>
          external ? (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLink}
            >
              {name}
            </a>
          ) : (
            <Link key={name} href={href} className={styles.navLink}>
              {name}
            </Link>
          )
        )}
      </nav>

      <div className={styles.mobileDrawer}>
        {navLinks.map(({ name, href, external }) =>
          external ? (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileLink}
            >
              {name}
            </a>
          ) : (
            <Link key={name} href={href} className={styles.mobileLink}>
              {name}
            </Link>
          )
        )}
      </div>
    </header>
  )
}

export default NavBar
