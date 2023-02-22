import {Drawer, DrawerProps} from "antd";
import React, {useMemo, useState} from "react";

const VDrawer = (props: DrawerProps & { trigger?: JSX.Element }) => {
  const {trigger, onClose, ...rest} = props
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
      {triggerDom}
      <Drawer
        {...rest}
        open={open}
        onClose={(e) => {
          setOpen(false)
          onClose && onClose(e)
        }}
      >
        {props.children}
      </Drawer>
    </>

  )
}

export default VDrawer
