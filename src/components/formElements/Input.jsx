export const Input = ({
  type,
  value,
  onChange,
  placeholder,
  id,
  name,
  required
}) => {
  return (
    <>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={id}
        name={name}
        required={required}
        autoComplete='on'
      />
    </>
  )
}
