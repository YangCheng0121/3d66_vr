const Cursor = (props: any) => {
  const {...rest} = props
  return (
    <div {...rest} style={{display: 'inline-block', cursor: 'pointer'}}>
      {props.children}
    </div>
  )
}

export default Cursor