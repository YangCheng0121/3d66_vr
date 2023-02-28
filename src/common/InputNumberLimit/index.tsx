import styles from "./input_number.module.scss";
import {Input, InputProps} from "antd";
import React, {CSSProperties, useState} from "react";

type InputNumberLimitProps = InputProps & {
  numberStyle?: CSSProperties
}

const InputNumberLimit = (props: InputNumberLimitProps) => {
  const {className, maxLength, numberStyle, ...rest} = props

  const [num, setNum] = useState(0)

  return (
    <div className={styles.input_wrap}>
      <Input
        {...rest}
        maxLength={maxLength}
        className={`${styles.input} ${className}`}
        onChange={(e: any) => setNum(e.target.value.length)}
      />
      <span className={styles.input_num} style={numberStyle}>{num}/{maxLength}</span>
    </div>
  )
}

export default InputNumberLimit
