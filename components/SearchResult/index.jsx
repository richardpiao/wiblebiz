'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccordionList from '../AccordionList'
import Loadmore from '../Loadmore'
import LoadingSpinner from '../LoadingSpinner'
import { searchAction } from '@/lib/searchAction'
import { appendFaqResults, setFaqResults } from '@/store/slices/faqSlice'
import { updateSearchParam } from '@/store/slices/searchParamsSlice'
import styles from './styles.module.css'

export default function SearchResultBody({ initialResults }) {
  const dispatch = useDispatch()
  const searchParams = useSelector((state) => state.searchParams)
  const { tab, faqCategoryID, question } = searchParams
  const [items, setItems] = useState(initialResults.items || [])
  const [openItemId, setOpenItemId] = useState(null)
  const [pageInfo, setPageInfo] = useState(initialResults.pageInfo)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    dispatch(setFaqResults(initialResults))
  }, [initialResults])

  useEffect(() => {
    const fetchUpdatedResults = async () => {
      setIsLoading(true)
      const newResults = await searchAction(searchParams)
      dispatch(setFaqResults(newResults))
      setItems(newResults.items)
      setPageInfo(newResults.pageInfo)
      setIsLoading(false)
    }

    fetchUpdatedResults()
  }, [tab, faqCategoryID, question])

  const handleLoadMore = async () => {
    const newOffset = searchParams.offset + searchParams.limit
    dispatch(updateSearchParam({ key: 'offset', value: newOffset }))

    const updatedParams = {
      ...searchParams,
      offset: newOffset,
    }

    const newResults = await searchAction(updatedParams)

    dispatch(appendFaqResults(newResults))
    setItems((prev) => [...prev, ...newResults.items])
    setPageInfo(newResults.pageInfo)
  }

  const handleToggle = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id))
  }

  const hasResult = (pageInfo?.totalRecord ?? 0) > 0

  const hasMore =
    pageInfo?.totalRecord != null &&
    pageInfo?.offset != null &&
    pageInfo?.limit != null &&
    pageInfo.totalRecord > pageInfo.offset + pageInfo.limit

  if (isLoading) {
    return (
      <div className={styles.loadingWrapper}>
        <LoadingSpinner />
      </div>
    )
  }

  if (!hasResult) {
    return (
      <div className={styles.noResultBody}>
        <Image src="/svg/ic_nodata.svg" alt="정보없음" width={64} height={64} />
        <p className={styles.paragraph}>검색결과가 없습니다.</p>
      </div>
    )
  }

  return (
    <div className={styles.searchResultBody}>
      <AccordionList
        items={items}
        tab={tab}
        openItemId={openItemId}
        onToggle={handleToggle}
      />
      {hasMore && <Loadmore onClick={handleLoadMore} />}
    </div>
  )
}
