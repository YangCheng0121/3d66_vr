import React, {useMemo, useState} from "react";
import {ModalProps, Modal} from "antd";

const VModal = (props: ModalProps & { trigger?: JSX.Element; onFinish?: Function }) => {
  const {trigger, ...rest} = props
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
      <Modal {...rest}
             open={open}
             onOk={() => {
               setOpen(false)
               props.onFinish && props.onFinish()
             }}
             onCancel={() => setOpen(false)}>
        {props.children}
      </Modal>
      {triggerDom}
    </>
  )
}

export default VModal