import styles from './edit_detail.module.scss'
import dynamic from "next/dynamic";

const Krpano = dynamic(
  () => {
    return import('./components/Krpano');
  },
  { ssr: false },
);

const RightBar = () => {
  return (
    <ul className={styles.right_bar}>
      <li className={styles.right_bar_item}>
        <span className={styles.right_bar_label}>初始视角</span>
      </li>
      <li className={styles.right_bar_item}>
        <span className={styles.right_bar_label}>热点</span>
      </li>
    </ul>
  )
}

function Index() {
  return (
    <>
      <Krpano/>
      <RightBar/>
      <h1>我是VR详情</h1>
    </>
  )
}

export default Index
