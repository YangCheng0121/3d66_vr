import React, {useMemo} from "react";

const useTriggerDom = ({open, setOpen, trigger}: any) => {
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
  }, [open, setOpen, trigger]);

  return triggerDom
}

export default useTriggerDom