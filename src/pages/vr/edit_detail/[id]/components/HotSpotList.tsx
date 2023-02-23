import React, {useMemo, useState} from "react";
import {Row, Space, Typography, Col, Drawer, Button, ConfigProvider} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import useTriggerDom from "@/hooks/triggerDom";

const COLOR = '#1D2129'

const HotSpotList = (props: any) => {
  const {trigger} = props
  const [open, setOpen] = useState(false)
  const triggerDom = useTriggerDom({open, setOpen, trigger})

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
            享无限容量
          </Space.Compact>
          <Button block type="primary" style={{color: COLOR}}>
            添加热点
          </Button>
        </ConfigProvider>
      </Drawer>
    </>
  )
}

export default HotSpotList