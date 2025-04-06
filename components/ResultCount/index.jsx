'use client'

import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import styles from './styles.module.css'
import { clearAllSearchParams } from '@/store/slices/searchParamsSlice'

const ResultCount = ({ reset }) => {
  const dispatch = useDispatch()
  const { pageInfo } = useSelector((state) => state.faq)
  const { question } = useSelector((state) => state.searchParams)
  const handleReset = () => {
    dispatch(clearAllSearchParams())
    reset('')
  }

  const total = pageInfo?.totalRecord ?? 0

  if (question == '') {
    return null
  }

  return (
    <div className={styles.header}>
      <p className={styles.countText}>검색결과 총 {total}건</p>
      <button className={styles.resetButton} onClick={handleReset}>
        <Image src="/ic_init.svg" alt="icon" width={24} height={24} />
        <span>검색초기화</span>
      </button>
    </div>
  )
}

export default ResultCount
