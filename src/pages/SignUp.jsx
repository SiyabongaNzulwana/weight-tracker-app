import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Label } from '../components/formElements/Label'
import { Input } from '../components/formElements/Input'
import { Button } from '../components/formElements/Button'

import { UserContext } from '../contexts/UserContext'

export const SignUp = (props) => {
  const navigate = useNavigate()
  const { updateUser } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {}, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const params = {
      firstName,
      lastName,
      email,
      password,
      gender
    }

    const response = await fetch('http://localhost:3001/api/users/sign_up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })

    const data = await response.json()
    setUser(data)
    updateUser(data)
    navigate('/login', { replace: true })
    return data
  }

  const onChangeGenderValue = (e) => {
    setGender(e.target.value)
  }

  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className='signup-form'>
        <Label htmlFor='firstName'>First Name</Label>
        <Input
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='John'
          id='firstName'
          name='firstName'
          required={true}
        />

        <Label htmlFor='lastName'>Last Name</Label>
        <Input
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Doe'
          id='lastName'
          name='lastName'
          required={true}
        />

        <Label htmlFor='email'>Email</Label>
        <Input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='cya@example.com'
          id='email'
          name='email'
          required={true}
        />

        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='your password'
          id='password'
          name='password'
          required={true}
        />

        <Label htmlFor='gender'>Gender</Label>
        <div onChange={(e) => onChangeGenderValue(e)}>
          <input type='radio' value='male' name='gender' /> Male
          <input type='radio' value='female' name='gender' /> Female
          <input type='radio' value='other' name='gender' /> Other
        </div>

        <Button type='submit' onClick={() => {}}>
          SigUp
        </Button>
      </form>
    </div>
  )
}

export default SignUp
