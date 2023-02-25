import {Drawer, Row, Col, Typography,Collapse} from "antd";
import React, {useState} from "react";
import {CloseOutlined} from "@ant-design/icons";
import Center from "@/common/Center";
import { RollbackOutlined } from '@ant-design/icons';

const AddSpot = (props: any) => {
  const {children} = props
  const [open, setOpen] = useState(false)

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
                <RollbackOutlined />
                返回
              </a>
            </Col>
            <Col flex={2}>
              <Center>
                <Typography style={{ color: '#fff'}}>热点设置</Typography>
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
        <Collapse defaultActiveKey={['1']}>
          <Collapse.Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Collapse.Panel>
          <Collapse.Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Collapse.Panel>
          <Collapse.Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Collapse.Panel>
        </Collapse>
      </Drawer>
    </>
  )
}

export default AddSpot
