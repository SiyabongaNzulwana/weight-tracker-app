import { useState, useEffect } from 'react'

export const WeightList = ({ weights }) => {
  const [currentUser, setCurrentUser] = useState()
  const [weightsData, setWeightsData] = useState(weights)
  useEffect(() => {
    const data = localStorage.getItem('user')
    const user = JSON.parse(data)
    setCurrentUser(user)
  }, [])

  useEffect(() => {
    setWeightsData(weights)
  }, [weights])

  const handleClick = async (id) => {
    const { token } = currentUser.data
    let response = await fetch(
      `http://localhost:3001/api/users/delete_weight/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        }
      }
    )

    response = await response.json()
    const { success } = response

    if (success) {
      const filteredData = weightsData.filter(
        (eachWeight) => eachWeight._id !== response.data._id
      )
      setWeightsData(filteredData)
    }
  }

  return (
    <div className='weight-list'>
      {weightsData.length > 0 && <h2>Your Progress so far!</h2>}
      {Array.isArray(weightsData) &&
        weightsData.length > 0 &&
        weightsData.map((weight) => {
          const humanReadableDate = new Date(weight.weightDate).toDateString()
          return (
            <div key={weight._id} className='weight-data'>
              <span className='weight-item'>{weight.weight}</span>{' '}
              <span className='weight-item'>{humanReadableDate}</span>
              <button
                className='delete-btn'
                onClick={() => handleClick(weight._id)}>
                Delete
              </button>
            </div>
          )
        })}
      {Array.isArray(weightsData) && !weightsData.length && (
        <h2>No Data to show yet, add your weight and come back here.!</h2>
      )}
    </div>
  )
}
