import React, {useEffect, useMemo, useState} from "react";
import {Row, Space, Typography, Col, Drawer, Button, ConfigProvider, Dropdown, MenuProps, List, Avatar} from "antd";
import {CloseOutlined, RightOutlined} from "@ant-design/icons";
import styles from '../edit_detail.module.scss'
import Padding from "@/common/Padding";
import IconFont from "@/common/IconFont";
import AddSpot from "@/pages/vr/edit_detail/[id]/components/AddSpot";

const COLOR_PRIMARY_TEXT = '#1D2129'
const COLOR_Typography_TEXT = '#86909C'

const HotSpotList = (props: any) => {
  const {children} = props
  const [open, setOpen] = useState(false)

  const AllDrown = () => {
    const [rotate, setRotate] = useState(0)

    const items: MenuProps['items'] = [
      {
        key: '1',
        label: 'Item 1',
      },
      {
        key: '2',
        label: 'Item 2',
      },
      {
        key: '3',
        label: 'Item 3',
      },
    ];

    return (
      <Dropdown
        trigger={['hover']}
        onOpenChange={(open) => {
          setRotate(open ? 90 : 0)
        }
        }
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: ['3'],
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
        push={false}
        closable={false}
        headerStyle={{
          borderBottom: '1px solid #4E5969'
        }}
        open={open}
        title={
          <Row align="middle">
            <Col flex={1}>
              <Space>
                <Typography style={{color: '#fff'}}>
                  全部热点
                </Typography>
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
          <AddSpot>
            <Button block type="primary" style={{color: COLOR_PRIMARY_TEXT}}>
              添加热点
            </Button>
          </AddSpot>

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

          <div style={{height: '80px'}}></div>
          <Row justify="center" style={{textAlign: 'center'}}>
            <Typography className={styles.vip_tip} style={{color: COLOR_Typography_TEXT}}>
              <div> 每个作品最多添加50个热点</div>
              <div>享无限热点容量，<Typography.Link> 开通全景贵族</Typography.Link></div>
              <div>添加后上下拖拽调整排序</div>
            </Typography>
          </Row>

          <List
            itemLayout="horizontal"
            dataSource={
              [
                {
                  title: 'Ant Design Title 1',
                },
                {
                  title: 'Ant Design Title 2',
                },
                {
                  title: 'Ant Design Title 3',
                },
                {
                  title: 'Ant Design Title 4',
                },
              ]
            }
            renderItem={(item) => (
              <>
                <Padding
                  paddingLeft={12}
                  paddingRight={12}
                  style={{background: 'rgba(78, 89, 105, 0.2)', borderRadius: '6px'}}>
                  <Row align="bottom">
                    <Col flex={2}>
                      <List.Item>
                        <List.Item.Meta
                          style={{alignItems: 'center'}}
                          avatar={<a><Avatar src="https://joesch.moe/api/v1/random"/></a>}
                          title={<Typography style={{color: '#fff'}}>{item.title}</Typography>}
                          description={
                            <Typography
                              style={{color: COLOR_Typography_TEXT}}>
                              Ant Design
                            </Typography>
                          }
                        />
                      </List.Item>
                    </Col>
                    <Col flex={1} style={{textAlign: 'right'}}>
                      <a>
                        <Space>
                          <IconFont type="icon-panorama_page_hot_pop_mod_icon_remane-copy" style={{color: '#86909C'}}/>
                          <IconFont type="icon-panorama_page_hot_pop_mod_icon_dite" style={{color: '#86909C'}}/>
                          <IconFont type="icon-panorama_page_hot_pop_mod_icon_delete_pic" style={{color: '#86909C'}}/>
                        </Space>
                      </a>
                      <div style={{height: '10px'}}></div>
                    </Col>
                  </Row>
                </Padding>
                <div style={{height: '8px'}}></div>
              </>
            )}
          >
          </List>
        </ConfigProvider>
      </Drawer>
    </>
  )
}

export default HotSpotList
