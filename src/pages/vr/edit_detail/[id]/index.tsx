import styles from './edit_detail.module.scss'
import dynamic from "next/dynamic";
import React, {useEffect, useState} from "react";
import {Button, Form, Input, Space, Tag, Typography} from 'antd';
import {CloseOutlined} from '@ant-design/icons'

import Modal from '@/common/Modal'
import Drawer from "@/common/Drawer";

const {CheckableTag} = Tag;
const {TextArea} = Input;

const {Text, Link} = Typography;

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
  const {trigger} = props

  const tagsData = ['Movies', 'Books', 'Music', 'Sports'];

  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

  const handleChange = (tag: string, checked: boolean) => {
    setSelectedTags([tag]);
  };

  return (
    <Modal
      title="作品信息"
      trigger={trigger}
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

const HotSpotList = (props: any) => {
  const {trigger} = props
  return (
    <Drawer
      style={{
        background: '#252830'
      }}
      closable={false}
      headerStyle={{
        borderBottom: '1px solid #4E5969'
      }}
      title={
        <Space>
          <h3 className={styles.hotSpotList_title}>
            全部热点
            <span className="hot-list-num"> 0</span>
          </h3>
        </Space>
      } trigger={trigger} placement="left">
      <Link>
        <Text underline>Ant Design (underline)</Text>
      </Link>
    </Drawer>
  )
}

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
        <WorkInformation trigger={
          <li className={styles.right_bar_item}>
            <span className={styles.right_bar_label}>作品信息</span>
          </li>
        }/>
        <HotSpotList trigger={
          <li className={styles.right_bar_item}>
            <span className={styles.right_bar_label}>热点</span>
          </li>
        }/>
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
