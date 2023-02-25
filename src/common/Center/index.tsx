import {FC} from "react"

export type direction = "horizontal" | "vertical"

type CenterProps = {
  full?: boolean
  width?: string | number
  height?: string | number
  direction?: direction,
  justifyContent?: "start" | "center" | "space-around" | "space-around" | "space-between",
  alignItems?: "center" | "space-around" | "space-around" | "space-between",
  margin?: string
  children: React.ReactNode
  [propName: string]: any;
}

const Center: FC<CenterProps> = (props) => {
  const {
    full = false,
    width,
    justifyContent = "center",
    alignItems = "center",
    height,
    margin,
    direction = "horizontal",
    ...other
  } = props;
  return <div style={{
    display: 'flex',
    position: 'relative',
    flex: 1,
    alignItems: alignItems,
    justifyContent: justifyContent,
    flexDirection: direction == "horizontal" ? "row" : "column",
    width: full ? "100%" : width,
    height: full ? "100%" : height,
    margin: margin,
  }} {...other} >
    {props.children}
  </div>
}

export default Center