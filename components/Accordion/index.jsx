'use client'

import Image from 'next/image'
import styles from './styles.module.css'

export default function AccordionItem({ item, open, tab }) {
  const { id, question, answer, categoryName, subCategoryName } = item
  const showCategory = tab !== 'CONSULT'

  return (
    <div key={id} className={styles.accordion}>
      <button className={styles.header}>
        <div className={styles.headerText}>
          {/* Mobile Meta */}
          <div className={styles.metaMobile}>
            {showCategory && `${categoryName} > `}
            {subCategoryName}
          </div>

          {/* Desktop Flex Columns */}
          {showCategory && (
            <div className={styles.categoryDesktop}>{categoryName}</div>
          )}
          <div className={styles.subCategoryDesktop}>{subCategoryName}</div>

          <p className={styles.question}>{question}</p>
        </div>

        <Image
          src="/svg/ic_arrow.svg"
          alt="화살표"
          className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`}
          width={20}
          height={20}
        />
      </button>

      <div className={`${styles.answerWrapper} ${open ? styles.open : ''}`}>
        <div
          className={styles.answer}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  )
}
