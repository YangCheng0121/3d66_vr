import {Modal, Button, Typography, Space, Row} from 'antd';
import React, {useState} from 'react';
import styles from './scenes.module.scss'

const ScenesEdit = (props: any) => {
  const {children} = props
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const Group = () => {
    return (
      <div>
        <Typography style={{fontWeight: 'bold'}}>分组管理 2/10</Typography>
        <ul className={styles.groupList}>
          <li className={styles.groupList_item}>
            分组1
          </li>
          <li className={styles.groupList_item}>
            分组2
          </li>
        </ul>
      </div>
    )
  }

  const ScenesList =() =>{
    return (
      <>
      </>
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
      <Modal
        open={open}
        title="场景编辑"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <Row>
          <Group></Group>
          <ScenesList></ScenesList>
        </Row>
      </Modal>
    </>
  )
}

export default ScenesEdit
