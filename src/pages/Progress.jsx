import { useEffect, useState } from 'react'

import { WeightList } from '../components/WeightList'

export const Progress = () => {
  const [weightData, setWeightData] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    const data = localStorage.getItem('user')
    const user = JSON.parse(data)
    setUser(user)
    fetch(
      `http://localhost:3001/api/users/get_weight_history/${user.data.email}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': user.data.token
        }
      }
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return setWeightData(data.data)
      })
  }, [])

  return (
    <div>
      {!weightData || !weightData.length ? (
        <div>Loading...</div>
      ) : (
        <WeightList weights={weightData} />
      )}
    </div>
  )
}
