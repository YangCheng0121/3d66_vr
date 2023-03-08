import {Drawer, Row, Col, Typography, Collapse, Radio, Space, Form, Input, Dropdown, MenuProps} from "antd";
import React, {useState} from "react";
import {CloseOutlined} from "@ant-design/icons";
import Center from "@/common/Center";
import InputNumberLimit from '@/common/InputNumberLimit'

import {RollbackOutlined, CaretDownFilled, SearchOutlined} from '@ant-design/icons';
import styles from './spot.module.scss'
import Cursor from "@/common/Cursor";

const AddSpot = (props: any) => {
  const {children} = props
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(0)
  const [form, setForm] = useState<any>({})
  const [tab, setTab] = useState('system')
  const [style, setStyle] = useState(null)
  let mySpotTimer: any

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];

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
        width={390}
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
            defaultActiveKey={['Type', 'Name', 'Style', 'Scenes']}
            expandIcon={({isActive}) =>
              <CaretDownFilled style={{color: isActive ? '#F8BC25' : '#C9CDD4'}}
                               rotate={isActive ? 0 : -90}/>}
          >
            <Collapse.Panel
              key="Type"
              style={{border: 'none'}}
              header={
                <Typography.Title style={{color: '#fff'}} level={5}>类型</Typography.Title>
              }>
              <Form.Item rootClassName={styles.spot_formItem}>
                <Radio.Group
                  onChange={(e) => setType(e.target.value)}
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
                            className={type !== item.value ? styles.spot_type : styles.spot_type__active}
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
              key="Name"
              style={{border: 'none'}}
              header={
                <Typography.Title style={{color: '#fff'}} level={5}>名称</Typography.Title>
              }>
              <Form.Item className={styles.spot_formItem}>
                <InputNumberLimit className={styles.spot_input} numberStyle={{color: '#86909C'}} maxLength={50}
                                  placeholder="请输入热点名称(非必填)"/>
              </Form.Item>
            </Collapse.Panel>
            <Collapse.Panel
              key="Style"
              style={{border: 'none'}}
              header={<Typography.Title style={{color: '#fff'}} level={5}>样式</Typography.Title>}>
              <Row justify="center">
                <div className={styles.spot_tabs}>
                  {
                    [{label: '系统热点', key: 'system'}, {label: '自定义热点', key: 'customer'}].map(item => {
                      return (
                        <div className={`${styles.spot_tab} ${tab === item.key ? styles.spot_tab__active : ''}`}
                             key={item.key}
                             onClick={() => setTab(item.key)}
                        >
                          {item.label}
                        </div>
                      )
                    })
                  }
                </div>
              </Row>
              <div className={styles.spot_styleWrap}>
                <div className={styles.spot_style}>
                  <img
                    onMouseEnter={(e: any) => {
                      let width = e.target.width
                      let height = e.target.height
                      let frame = height / width;
                      let i = 0
                      mySpotTimer = setInterval(function () {
                        // $this.css('margin-top', -width * i + 'px');
                        e.target.style.marginTop = -width * i + 'px'
                        i++;
                        if (i >= frame) {
                          i = 0;
                        }
                      }, 50);
                    }}
                    onMouseLeave={(e: any) => {
                      clearInterval(mySpotTimer)
                      e.target.style.marginTop = 0
                    }}
                    className={styles.spot_styleImg}

                    src="https://static.3d66.com/vr/js/krpano/skin/hotspot/hotspot_1.png" alt=""/>
                </div>
              </div>
            </Collapse.Panel>
            <Collapse.Panel
              key="Scenes"
              style={{border: 'none'}}
              header={
                <Row>
                  <Col flex={2}>
                    <Space align="baseline">
                      <Typography.Title style={{color: '#fff'}} level={5}>选择关联场景</Typography.Title>
                      <SearchOutlined style={{fontSize: '16px', color: '#fff'}}/>
                    </Space>
                  </Col>
                  <Col flex={1}>
                    <Dropdown menu={{items}}>
                      <Cursor onClick={(e: any) => e.preventDefault()}>
                        <Typography style={{color: '#fff'}}>全部</Typography>
                      </Cursor>
                    </Dropdown>
                  </Col>
                </Row>
              }
            >
              <Form.Item className={styles.spot_formItem}>
                <Input className={styles.spot_input} placeholder="输入场景名称进行查找"></Input>
                <div className={styles.spot_scenesList}>
                  <div className={styles.spot_addScenes}>

                  </div>
                  <ul className={styles.spot_scenesList}>
                    <li className={styles.spot_scenes}>
                      <img className={styles.spot_img}
                           src="https://vrimg.3d66.com/vr/thumb/20230214/5539612/thumb.jpg"
                           alt=""
                      />
                      <p className={styles.spot_name}>
                        场景名称
                      </p>
                    </li>
                  </ul>
                </div>
              </Form.Item>
            </Collapse.Panel>
          </Collapse>
        </Form>
      </Drawer>
    </>
  )
}

export default AddSpot
