import {Drawer, Row, Col, Typography, Collapse, Radio, Space, Form, Input} from "antd";
import React, {useState} from "react";
import {CloseOutlined} from "@ant-design/icons";
import Center from "@/common/Center";
import InputNumberLimit from '@/common/InputNumberLimit'

import {RollbackOutlined, CaretDownFilled} from '@ant-design/icons';
import styles from '../edit_detail.module.scss'

const AddSpot = (props: any) => {
  const {children} = props
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(0)
  const [form, setForm] = useState<any>({})

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  return (
    <>
      {React.cloneElement(children, {
        ...children.props,
        onClick: (e: any) => {
          setOpen(!open);
          children.props?.onClick?.(e);
        },
      })}
      <Drawer
        style={{
          background: '#252830'
        }}
        placement="left"
        open={open}
        closable={false}
        headerStyle={{
          borderBottom: '1px solid #4E5969'
        }}
        title={
          <Row>
            <Col flex={1}>
              <a style={{color: '#fff'}} onClick={() => setOpen(false)}>
                <RollbackOutlined/>
                返回
              </a>
            </Col>
            <Col flex={2}>
              <Center>
                <Typography style={{color: '#fff'}}>热点设置</Typography>
              </Center>
            </Col>
            <Col flex={1} style={{textAlign: 'right'}}>
              <a onClick={() => setOpen(false)}>
                <CloseOutlined style={{color: '#C9CDD4'}}/>
              </a>
            </Col>
          </Row>
        }
      >
        <Form>
          <Collapse
            bordered={false}
            defaultActiveKey={['1', '2', '3']}
            expandIcon={({isActive}) =>
              <CaretDownFilled style={{color: isActive ? '#F8BC25' : '#C9CDD4'}}
                               rotate={isActive ? 0 : -90}/>}
          >
            <Collapse.Panel
              style={{border: 'none'}}
              header={
                <Typography.Title style={{color: '#fff'}} level={5}>类型</Typography.Title>
              }
              key="1">
              <Form.Item rootClassName={styles.spot_formItem}>
                <Radio.Group
                  onChange={(e) => setType(e.target.value)}
                  defaultValue="a"
                  buttonStyle="solid"
                  size="small">
                  <Space>
                    {
                      [
                        {label: '场景切换', value: 1},
                        {label: '超链接', value: 2},
                        {label: '图片', value: 3},
                        {label: '文字', value: 4},
                        {label: '视频', value: 5}
                      ].map((item) => {
                        return (
                          <Radio.Button
                            className={type !== item.value ? styles.spot_type : styles.spot_type_active}
                            value={item.value}
                            key={item.value}>
                            {item.label}
                          </Radio.Button>
                        )
                      })
                    }
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Collapse.Panel>
            <Collapse.Panel
              style={{border: 'none'}}
              header={
                <Typography.Title style={{color: '#fff'}} level={5}>类型</Typography.Title>
              } key="2">
              <Form.Item className={styles.spot_formItem}>
                <InputNumberLimit className={styles.spot_input} numberStyle={{color: '#86909C'}} maxLength={50}/>
              </Form.Item>
            </Collapse.Panel>
            <Collapse.Panel style={{border: 'none'}}
                            header={<Typography.Title style={{color: '#fff'}} level={5}>样式</Typography.Title>}
                            key="3">
              <p>{text}</p>
            </Collapse.Panel>
          </Collapse>
        </Form>

      </Drawer>
    </>
  )
}

export default AddSpot
