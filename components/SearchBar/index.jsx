'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import styles from './styles.module.css'
import { updateSearchParam } from '@/store/slices/searchParamsSlice'
import ResultCount from '../ResultCount'

const SearchBar = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()
  const searchParams = useSelector((state) => state.searchParams)

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleClear = () => {
    setKeyword('')
  }

  const handleSearch = () => {
    dispatch(updateSearchParam({ key: 'question', value: keyword }))
    dispatch(updateSearchParam({ key: 'offset', value: 0 }))

    if (!searchParams.tab) {
      dispatch(updateSearchParam({ key: 'tab', value: 'CONSULT' }))
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            value={keyword}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={styles.input}
            placeholder="찾으시는 내용을 입력해 주세요"
          />
          {keyword && (
            <button className={styles.clearButton} onClick={handleClear}>
              <Image
                src="/ic_clear.svg"
                alt="clear"
                className={styles.icon}
                width={24}
                height={24}
              />
            </button>
          )}
          <button className={styles.searchButton} onClick={handleSearch}>
            <Image
              src="/ic_search.svg"
              alt="search"
              className={styles.icon}
              width={32}
              height={32}
            />
          </button>
        </div>
      </div>
      <ResultCount reset={setKeyword} />
    </div>
  )
}

export default SearchBar
