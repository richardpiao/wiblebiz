import styles from './styles.module.css'

const Loadmore = ({ onClick }) => {
  return (
    <button className={styles.loadMoreButton} onClick={onClick}>
      + 더보기
    </button>
  )
}

export default Loadmore
