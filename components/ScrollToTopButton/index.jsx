'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight

      setIsVisible(scrollY > 300)
      setAtBottom(scrollY + windowHeight >= scrollHeight - 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsVisible(false)
  }

  const className = [
    styles.button,
    !isVisible && styles.hidden,
    atBottom && styles.atBottom,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      onClick={scrollToTop}
      className={className}
      aria-label="Scroll to top"
    >
      <Image
        src="/ic_top.svg"
        alt="Scroll to top"
        width={32}
        height={32}
        className={styles.icon}
        priority
      />
    </button>
  )
}
