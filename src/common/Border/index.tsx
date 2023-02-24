import borderStyle from "./border.module.scss"
import ContentResult from "../ContentResult"
interface Iprops {
    borderColor?: string
    border?: boolean
    borderType?: string
    borderWidth?: number
    borderSeat?: "Top" | "Right" | "Bottom" | "Left" | "None" | null
    borderRadius?: number
    hoverColor?: boolean
    padding?: any
    style?: React.CSSProperties
    [propName: string]: any;
}

const border = (props: Iprops) => {
    let { borderColor = "#E8E9F3", hoverColor, border = true, borderSeat = null, padding, borderType = "solid", borderWidth = 1, borderRadius = 0, style,className, ...other } = props;
    let borderClass: any = [];

    switch (borderSeat) {
        case "Top":
            borderClass = [borderStyle.top]
            break;
        case "Bottom":
            borderClass = [borderStyle.bottom]
            break;
        case "Left":
            borderClass = [borderStyle.left]
            break;
        case "Right":
            borderClass = [borderStyle.right]
            break;
        case "None":
            borderClass = []
            break;
        default:
            borderClass = [borderStyle.top, borderStyle.bottom, borderStyle.left, borderStyle.right]
    }
    let _className = borderStyle.border;
    if (hoverColor) {
        _className = _className + " " + borderStyle.hoverColor
    }

    if (className) {
        _className = _className + " " + className
    }
    return props.children ? <div className={_className + " " + borderClass.join(" ")} style={{
        position: 'relative',
        borderRadius: borderRadius,
        padding: padding,
        ...style

    }}

        {...other}
    >
        {/* {borderClass.map((item: any, index: number) => {
            return <div key={index} className={item}></div>
        })} */}

        {props.children}

    </div> : <ContentResult></ContentResult>
}

export default border
