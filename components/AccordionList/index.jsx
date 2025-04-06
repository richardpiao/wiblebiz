import Accordion from '../Accordion'
import styles from './styles.module.css'

export default function AccordionList({ items, openItemId, onToggle, tab }) {
  if (!items) return null

  return (
    <ul className={styles.wrapper}>
      {items.map((item, index) => (
        <li
          key={index}
          onClick={() => onToggle(item.id)}
          style={{ cursor: 'pointer' }}
        >
          <Accordion
            item={item}
            tab={tab}
            open={openItemId === item.id}
            onToggle={onToggle}
          />
        </li>
      ))}
    </ul>
  )
}
