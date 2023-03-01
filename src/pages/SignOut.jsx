import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const SignOut = () => {
  const navigate = useNavigate()
  useEffect(() => {
    localStorage.removeItem('user')
    setTimeout(() => {
      navigate('/login', { replace: true })
    }, 500)
  }, [navigate])
  return <></>
}
