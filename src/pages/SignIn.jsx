import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Label } from '../components/formElements/Label'
import { Input } from '../components/formElements/Input'
import { Button } from '../components/formElements/Button'

export const SignIn = (props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const params = {
      email,
      password
    }

    let response = await fetch('http://localhost:3001/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })

    response = await response.json()
    localStorage.setItem('user', JSON.stringify(response))
    navigate('/', { replace: true })
  }

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='sign-form'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='youremail@domain.com'
          id='email'
          name='email'
          required
        />

        <Label htmlFor='email'>Password</Label>
        <Input
          type='passowrd'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='your password'
          id='passowrd'
          name='passowrd'
          required
        />
        <Button type='submit' onClick={() => {}}>
          SigIn
        </Button>
      </form>
    </div>
  )
}

export default SignIn
