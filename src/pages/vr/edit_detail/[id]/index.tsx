import styles from './edit_detail.module.scss'

const RightBar = () => {
  return (
    <ul className={styles.right_bar}>
      <li className={styles.right_bar_item}>
        <span className={styles.right_bar_label}>热点</span>
      </li>
    </ul>
  )
}

function Index() {
  return (
    <>
      <RightBar/>
      <h1>我是VR详情</h1>
    </>
  )
}

export default Index
