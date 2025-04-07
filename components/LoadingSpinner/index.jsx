import styles from './styles.module.css'

export default function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  )
}
