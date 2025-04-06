import TabList from '@/components/TabList'
import SearchBar from '@/components/SearchBar'
import SearchResult from '@/components/SearchResult'
import Filter from '@/components/Filter'
import ServiceInquiry from '@/components/ServiceInquiry'
import ProcessSteps from '@/components/ProcessSteps'
import AppBanner from '@/components/AppBanner'
import { searchAction } from '../lib/searchAction'

import styles from './page.module.css'

export default async function FAQPage({ searchParams }) {
  const params = await searchParams
  const tab = params.tab || 'CONSULT'

  const faqResults = await searchAction(params)

  return (
    <div className={styles.page}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>자주 묻는 질문</h1>
        <h4 className={styles.subTitle}>궁금하신 내용을 빠르게 찾아보세요.</h4>
      </div>
      <TabList selectedTab={tab} />
      <SearchBar />
      <Filter />
      <SearchResult initialResults={faqResults} />
      <ServiceInquiry />
      <ProcessSteps />
      <AppBanner />
    </div>
  )
}
