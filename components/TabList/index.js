'use client'

import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import { updateSearchParam } from '@/store/slices/searchParamsSlice'

const TabSelector = () => {
  const dispatch = useDispatch()
  const searchParams = useSelector((state) => state.searchParams)

  const tabMap = {
    '서비스 도입': 'CONSULT',
    '서비스 이용': 'USAGE',
  }

  const tabs = Object.keys(tabMap) // ['서비스 도입', '서비스 이용']

  const onClick = (e) => {
    const label = e.currentTarget.dataset.tab
    const tabValue = tabMap[label]

    dispatch(updateSearchParam({ key: 'tab', value: tabValue }))
    dispatch(updateSearchParam({ key: 'offset', value: 0 }))
    dispatch(updateSearchParam({ key: 'faqCategoryID', value: null }))
  }

  return (
    <div className={styles.tabContainer}>
      {tabs.map((label, index) => {
        const isActive = searchParams.tab === tabMap[label] // Compare using value
        return (
          <div
            key={index}
            data-tab={label}
            onClick={onClick}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
          >
            <span>{label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default TabSelector
