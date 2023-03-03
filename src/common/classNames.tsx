const classNames = (classList: any) => {
    let newClassList = classList.join(",")
    newClassList = newClassList.replace(/\,/g, " ")
    return newClassList
}

export default classNames