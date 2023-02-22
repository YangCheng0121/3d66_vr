import React from "react";
import Drawer from "@/common/Drawer";
import {Space, Typography} from "antd";
import styles from "../edit_detail.module.scss";
import {CloseOutlined} from "@ant-design/icons";

const {Text, Link} = Typography;
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
          <CloseOutlined />
        </Space>
      } trigger={trigger} placement="left">
      <Link>
        <Text underline>Ant Design (underline)</Text>
      </Link>
    </Drawer>
  )
}

export default HotSpotList