import React, {useMemo, useState} from "react";
import {ModalProps, Modal} from "antd";

const VModal = (props: ModalProps & { trigger?: JSX.Element; onFinish?: Function }) => {
  const {trigger, onCancel, onFinish, ...rest} = props
  const [open, setOpen] = useState(false)

  const triggerDom = useMemo(() => {
    if (!trigger) {
      return null;
    }

    return React.cloneElement(trigger, {
      key: 'trigger',
      ...trigger.props,
      onClick: (e: any) => {
        setOpen(!open);
        trigger.props?.onClick?.(e);
      },
    });
  }, [setOpen, trigger, open]);

  return (
    <>
      <Modal
        cancelText="取消"
        okText="保存"
        {...rest}
        open={open}
        onOk={(e) => {
          setOpen(false)
          onFinish && onFinish(e)
        }}
        onCancel={(e) => {
          onCancel && onCancel(e)
          setOpen(false)
        }}>
        {props.children}
      </Modal>
      {triggerDom}
    </>
  )
}

export default VModal
