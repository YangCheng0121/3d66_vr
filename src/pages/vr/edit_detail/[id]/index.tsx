import styles from './edit_detail.module.scss'
import dynamic from "next/dynamic";
import React, {useEffect, useState} from "react";
import {Button, Form, Input, Space, Tag, Typography} from 'antd';
import Modal from '@/common/Modal'
import HotSpotList from "./components/HotSpotList";

const {CheckableTag} = Tag;
const {TextArea} = Input;

const Krpano = dynamic(
  () => {
    return import('./components/Krpano');
  },
  {ssr: false},
);

// 设置视角
const SetViewBox = (props: any) => {
  const {children} = props
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
        React.cloneElement(children, {
          key: 'trigger',
          ...children.props,
          onClick: (e: any) => {
            setOpen(!open);
            children.props?.onClick?.(e);
          },
        })
      }
    </>
  )
}

// 作品信息
const WorkInformation = (props: any) => {
  const {children} = props

  const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

  const handleChange = (tag: string, checked: boolean) => {
    setSelectedTags([tag]);
  };

  return (
    <Modal
      title="作品信息"
      trigger={children}
      width={680}
    >
      <Form name="WorkInfo" labelCol={{span: 4}}>
        <Form.Item
          label="作品名称"
          name="vr_name"
          rules={[{required: true, message: '请输入作品名称'}]}
        >
          <Input placeholder="请输入作品名称"/>
        </Form.Item>
        <Form.Item
          label="作品分类"
          name="vr_class_id"
          rules={[{required: true, message: '请选择作品分类'}]}
        >
          <Space size={[0, 8]} wrap>
            {tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={selectedTags.includes(tag)}
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </Space>
        </Form.Item>
        <Form.Item
          label="设计说明"
          name="vr_explain"
        >
          <TextArea rows={4}/>
        </Form.Item>
      </Form>
    </Modal>
  )
}

// 右边栏
const RightBar = () => {
  return (
    <>
      <ul className={styles.right_bar}>
        <SetViewBox>
          <li className={styles.right_bar_item}>
            <span className={styles.right_bar_label}>初始视角</span>
          </li>
        </SetViewBox>
        <WorkInformation>
          <li className={styles.right_bar_item}>
            <span className={styles.right_bar_label}>作品信息</span>
          </li>
        </WorkInformation>
        <HotSpotList >
          <li className={styles.right_bar_item}>
            <span className={styles.right_bar_label}>热点</span>
          </li>
        </HotSpotList>
      </ul>
    </>
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
