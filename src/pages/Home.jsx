import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Input } from '../components/formElements/Input'
import { Label } from '../components/formElements/Label'
import { Button } from '../components/formElements/Button'

export const Home = () => {
  const navigate = useNavigate()
  const [weightDate, setWeightDate] = useState()
  const [weight, setWeight] = useState(0)
  const [currentUser, setCurrentUser] = useState()
  const [submitted, setSubmmited] = useState(false)

  const notify = () => submitted && toast('record saved')

  useEffect(() => {
    const user = localStorage.getItem('user')
    setCurrentUser(JSON.parse(user))
    if (user) {
      navigate('/', { replace: true })
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    setSubmmited(false)
    const { token } = currentUser.data
    e.preventDefault()
    const { email } = currentUser.data
    const params = {
      weight,
      weightDate,
      email
    }

    try {
      const response = await fetch(
        'http://localhost:3001/api/users/save_weight',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          },
          body: JSON.stringify(params)
        }
      )

      const data = await response.json()
      setWeightDate('')
      setWeight(0)
      setSubmmited(true)
      return data
    } catch (e) {
      toast('something wrong')
    }
  }

  const allFormsHasData = weightDate && weight !== 0

  return (
    <div>
      {currentUser && (
        <h2>
          {' '}
          Welcome {currentUser.data.firstName}{' '}
          <h6 className='small-text'>Add your weight details here...</h6>
        </h2>
      )}
      <form onSubmit={handleSubmit} className='sign-form'>
        <Label htmlFor='date'>Select Date</Label>
        <Input
          type='date'
          value={weightDate}
          onChange={(e) => setWeightDate(e.target.value)}
          id='date'
          name='date'
          required
        />

        <Label htmlFor='weight'>Enter Weight</Label>
        <Input
          type='number'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          id='weight'
          name='weight'
          required
        />
        {allFormsHasData && (
          <>
            <Button type='submit' onClick={notify} disabled={allFormsHasData}>
              Submit
            </Button>
            <ToastContainer />
          </>
        )}
      </form>
    </div>
  )
}
