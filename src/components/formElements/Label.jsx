export const Label = (props) => {
  const transformedLabelName =
    props.children.charAt(0).toUpperCase() + props.children.slice(1)

  return (
    <>
      <label htmlFor={props.children}>{transformedLabelName}</label>
    </>
  )
}
