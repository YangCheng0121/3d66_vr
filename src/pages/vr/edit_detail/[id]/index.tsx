import styles from './edit_detail.module.scss'
import dynamic from "next/dynamic";
import {Button} from "antd";
import {useState} from "react";

const Krpano = dynamic(
  () => {
    return import('./components/Krpano');
  },
  {ssr: false},
);

const RightBar = () => {
  const [viewBox, setViewBox] = useState<boolean>(false)

  return (
    <ul className={styles.right_bar}>
      <li className={styles.right_bar_item} onClick={() => setViewBox((value) => {
        return !value
      })}>
        <span className={styles.right_bar_label}>初始视角</span>
        {viewBox && <SetViewBox/>}
      </li>
      <li className={styles.right_bar_item}>
        <span className={styles.right_bar_label}>热点</span>
      </li>
    </ul>
  )
}

const SetViewBox = () => {
  return (
    <div className={styles.set_view_box}>
      <div className={styles.line_t}></div>
      <div className={styles.line_r}></div>
      <div className={styles.line_b}></div>
      <div className={styles.line_l}></div>
      <div className={styles.box_lt}></div>
      <div className={styles.box_rt}></div>
      <div className={styles.box_rb}></div>
      <div className={styles.box_lb}></div>
      <Button type="primary" className={styles.set} onClick={e => e.stopPropagation()}>设为初始视角</Button>
    </div>
  )
}

function Index() {
  return (
    <>
      <Krpano/>
      <RightBar/>
    </>
  )
}

export default Index
