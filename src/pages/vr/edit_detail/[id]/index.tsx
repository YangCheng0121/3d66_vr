import styles from './edit_detail.module.scss'
import dynamic from "next/dynamic";
import {FC, useEffect, useMemo, useState} from "react";
import {Button, Modal} from 'antd';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Krpano = dynamic(
  () => {
    return import('./components/Krpano');
  },
  {ssr: false},
);

// 右边栏
const RightBar = () => {
  const [viewBox, setViewBox] = useState(false)
  const [workInfo, setWorkInfo] = useState(false)

  return (
    <>
      <ul className={styles.right_bar}>
        <li className={styles.right_bar_item} onClick={() => setViewBox((value) => {
          return !value
        })}>
          <span className={styles.right_bar_label}>初始视角</span>
        </li>
        <li className={styles.right_bar_item} onClick={() => setWorkInfo(true)}>
          <span className={styles.right_bar_label}>作品信息</span>
        </li>
        <li className={styles.right_bar_item}>
          <span className={styles.right_bar_label}>热点</span>
        </li>
      </ul>
      {viewBox && <SetViewBox/>}
      {workInfo && <WorkInformation onFinsh={() => setWorkInfo(false)}/>}
    </>
  )
}

// 设置视角
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
      <Button type="primary" className={styles.set}>设为初始视角</Button>
    </div>
  )
}

// 作品信息
const WorkInformation = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    props.onFinsh && props.onFinsh()
  };

  return (
    <Modal title="作品信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
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
