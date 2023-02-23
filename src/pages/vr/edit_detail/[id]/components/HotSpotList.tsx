import React, {useMemo, useState} from "react";
import {Row, Space, Typography, Col, Drawer, Button, ConfigProvider, Dropdown} from "antd";
import {CloseOutlined, RightOutlined} from "@ant-design/icons";
import useTriggerDom from "@/hooks/triggerDom";
import styles from '../edit_detail.module.scss'

const COLOR_PRIMARY_TEXT = '#1D2129'
const COLOR_Typography_TEXT = '#86909C'

const HotSpotList = (props: any) => {
  const {trigger} = props
  const [open, setOpen] = useState(false)
  const triggerDom = useTriggerDom({open, setOpen, trigger})

  const AllDrown = () => {
    const [dropDownOpen, setDropDownOpen] = useState(false)
    const [rotate, setRotate] = useState(0)

    return (
      <Dropdown
        trigger={['hover']}
        onOpenChange={(open) => {
          setRotate(open ? 90 : 0)
        }}
        open={dropDownOpen}
        dropdownRender={() => {
          return (
            <div className={styles.drown}>
              {
                [1, 2, 3].map((item: any) => {
                  return (
                    <div className={styles.drown_item}
                         key={item}
                         onClick={() => setDropDownOpen(false)}
                    >
                      <a>
                        全部热点
                      </a>
                    </div>
                  )
                })
              }
            </div>
          )
        }}
      >
        <a>
          <Typography.Text style={{color: COLOR_Typography_TEXT}}>
            全部热点
            <RightOutlined
              style={{color: COLOR_Typography_TEXT, transition: 'all .3s', transform: `rotate(${rotate}deg)`}}
            />
          </Typography.Text>
        </a>
      </Dropdown>
    )
  }

  return (
    <>
      {triggerDom}
      <Drawer
        style={{
          background: '#252830'
        }}
        closable={false}
        headerStyle={{
          borderBottom: '1px solid #4E5969'
        }}
        open={open}
        title={
          <Row align="middle">
            <Col flex={1}>
              <Space>
                <Typography.Title level={3} style={{color: '#fff', fontSize: '18px'}}>
                  全部热点
                </Typography.Title>
                <span style={{color: '#C9CDD4', fontSize: '14px'}}>0</span>
              </Space>
            </Col>
            <Col flex={1} style={{textAlign: 'right'}}>
              <a onClick={() => setOpen(false)}>
                <CloseOutlined style={{color: '#C9CDD4'}}/>
              </a>
            </Col>
          </Row>
        }
        placement="left">
        <ConfigProvider theme={{
          token: {
            colorPrimary: '#F8BC25',
            colorInfo: '#F8BC25',
          },
        }}>
          <Space.Compact>
            <Typography.Link underline>
              开通全景贵族
            </Typography.Link>
            <Typography style={{color: COLOR_Typography_TEXT}}>
              享无限容量
            </Typography>
          </Space.Compact>
          <div style={{height: '16px'}}></div>
          <Button block type="primary" style={{color: COLOR_PRIMARY_TEXT}}>
            添加热点
          </Button>

          <div style={{height: '20px'}}></div>

          <Row align="middle">
            <Col flex={1}>
              <Typography.Title level={5} style={{color: '#fff'}}>
                当前热点场景热点(1)
              </Typography.Title>
            </Col>
            <Col flex={1} style={{textAlign: 'right'}}>
              <AllDrown/>
            </Col>
          </Row>

        </ConfigProvider>
      </Drawer>
    </>
  )
}

export default HotSpotList