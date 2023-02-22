import styles from './edit_detail.module.scss'
import dynamic from "next/dynamic";
import React, {useState} from "react";
import {Button, Form, Input} from 'antd';
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
        <WorkInformation/>

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
      {
        React.cloneElement(trigger, {
          key: 'trigger',
          ...trigger.props,
          onClick: (e: any) => {
            setOpen(!open);
            trigger.props?.onClick?.(e);
          },
        })
      }
    </>
  )
}

// 作品信息
const WorkInformation = (props: any) => {
  return (
    <Modal
      title="作品信息"
      trigger={
        <li className={styles.right_bar_item}>
          <span className={styles.right_bar_label}>作品信息</span>
        </li>
      }>
      <Form name="WorkInfo">
        <Form.Item
          label="作品名称"
          name="vr_name"
          rules={[{required: true, message: '请输入作品名称'}]}
        >
          <Input placeholder="请输入作品名称"/>
        </Form.Item>
      </Form>
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
