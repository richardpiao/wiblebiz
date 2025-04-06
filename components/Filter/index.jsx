'use client'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import { setCategoryData } from '@/store/slices/categorySlice'
import { updateSearchParam } from '@/store/slices/searchParamsSlice'
import { categoryAction } from '@/lib/categoryAction'

const Filter = () => {
  const dispatch = useDispatch()
  const categoryData = useSelector((state) => state.category)
  const searchParamsState = useSelector((state) => state.searchParams)
  const { faqCategoryID, tab } = searchParamsState
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setSelected(faqCategoryID)
    categoryAction({ tab }).then((result) => {
      dispatch(setCategoryData({ categories: result.categories }))
    })
  }, [tab, faqCategoryID])

  const handleClick = (e) => {
    const value = e.currentTarget.dataset.value
    const categoryID = value === 'null' ? null : value
    setSelected(categoryID)

    dispatch(updateSearchParam({ key: 'faqCategoryID', value: categoryID }))
    dispatch(updateSearchParam({ key: 'offset', value: 0 }))
  }

  const fullList = [
    { categoryID: null, name: '전체' },
    ...categoryData.categories,
  ]

  return (
    <div className={styles.tabContainer}>
      {fullList.map((item) => {
        const isActive =
          (!selected && item.categoryID === null) ||
          selected === item.categoryID

        return (
          <div
            key={item.name}
            data-value={item.categoryID ?? 'null'}
            onClick={handleClick}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
          >
            {item.name}
          </div>
        )
      })}
    </div>
  )
}

export default Filter
