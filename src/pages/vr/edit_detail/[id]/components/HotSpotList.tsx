import React from "react";
import Drawer from "@/common/Drawer";
import {Space, Typography} from "antd";
import {CloseOutlined} from "@ant-design/icons";

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
          <Typography.Title level={3} style={{color: '#fff', fontSize: '18px'}}>
            全部热点
            <div style={{marginLeft: '4px'}}></div>
            <span style={{color: '#C9CDD4', fontSize: '14px'}}>0</span>
          </Typography.Title>
          <CloseOutlined />
        </Space>
      } trigger={trigger} placement="left">
      <Typography.Link>
        <Typography.Text underline>Ant Design (underline)</Typography.Text>
      </Typography.Link>
    </Drawer>
  )
}

export default HotSpotList