import styles from './edit_detail.module.scss'
import dynamic from "next/dynamic";
import React, {FC, useEffect, useMemo, useState} from "react";
import {Button} from 'antd';
import Modal from '@/common/Modal'

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

  return (
    <>
      <ul className={styles.right_bar}>
        <SetViewBox trigger={
          <li className={styles.right_bar_item}>
            <span className={styles.right_bar_label}>初始视角</span>
          </li>
        }/>
        <Modal
          trigger={
            <li className={styles.right_bar_item}>
              <span className={styles.right_bar_label}>作品信息</span>
            </li>
          }>

        </Modal>

        <li className={styles.right_bar_item}>
          <span className={styles.right_bar_label}>热点</span>
        </li>
      </ul>
    </>
  )
}

// 设置视角
const SetViewBox = (props: any) => {
  const {trigger} = props
  const [open, setOpen] = useState(false)

  const triggerDom = useMemo(() => {
    if (!trigger) {
      return null;
    }

    return React.cloneElement(trigger, {
      key: 'trigger',
      ...trigger.props,
      onClick: (e: any) => {
        setOpen(!open);
        trigger.props?.onClick?.(e);
      },
    });
  }, [setOpen, trigger, open]);

  return (
    <>
      {open &&
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
      }
      {triggerDom}
    </>
  )
}

// 作品信息
const WorkInformation = (props: any) => {

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
