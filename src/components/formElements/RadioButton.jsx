export const RadioButton = ({ onChange }) => {
  return (
    <div onChange={onChange}>
      <input type='radio' value='Male' name='gender' /> Male
      <input type='radio' value='Female' name='gender' /> Female
      <input type='radio' value='Other' name='gender' /> Other
    </div>
  )
}
