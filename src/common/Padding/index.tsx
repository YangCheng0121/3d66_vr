import borderStyle from "./border.module.scss"
interface Iprops {
    padding?: number | string
    paddingTop?: number | string
    paddingRight?: number | string
    paddingBottom?: number | string
    paddingLeft?: number | string
    style?: React.CSSProperties
    [propName: string]: any;
}

const padding = (props: Iprops) => {

    let { padding, paddingTop, paddingRight, paddingBottom, paddingLeft, style, ...other } = props;
    let paddingMap: any = {};
    if (padding) {
        paddingMap["padding"] = padding;
    }

    if (paddingTop) {
        paddingMap["paddingTop"] = padding;
    }

    if (paddingRight) {
        paddingMap["paddingRight"] = paddingRight;
    }

    if (paddingBottom) {
        paddingMap["paddingBottom"] = paddingBottom;
    }
    if (paddingLeft) {
        paddingMap["paddingLeft"] = paddingLeft;
    }
    return <div style={{
        position: 'relative',
        ...paddingMap,
        ...style
    }}
        {...other}
    >
        {props.children}
    </div>
}

export default padding
