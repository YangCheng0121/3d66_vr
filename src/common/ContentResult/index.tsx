
import Empty from "../../public/imgs/content_empty.png"
import Content404 from "../../public/imgs/content_404.png"
import ContentError from "../../public/imgs/content_error.png"
import NetWork from "../../public/imgs/network_error.png"
import Image from "next/image"

type ImageProps = {
    status?: "empty" | "404" | "content" | "network"
}

const contentResult = (props: ImageProps) => {
    let imgList = {
        empty: Empty,
        404: Content404,
        content: ContentError,
        network: NetWork,
    }
    let { status = "empty" } = props
    return <div style={{
        width: "10rem", height: "10rem",
        margin: "10rem auto",
    }}>
        <Image src={imgList[status]} alt=""></Image>
    </div>
}

export default contentResult