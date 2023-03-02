import { useState, useEffect } from 'react'

export const WeightList = ({ weights }) => {
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    const data = localStorage.getItem('user')
    const user = JSON.parse(data)
    setCurrentUser(user)
  }, [])

  useEffect(() => {}, [weights])

  const handleClick = async (id) => {
    const { token, email } = currentUser.data
    await fetch(`http://localhost:3001/api/users/delete_weight/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    })
  }

  return (
    <div className='weight-list'>
      {weights.length > 0 && <h2>Your Progress so far!</h2>}

      {Array.isArray(weights) &&
        weights.length > 0 &&
        weights.map((weight) => {
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
      {Array.isArray(weights) && !weights.length && (
        <h2>No Data to show yet, add your weight and come back here.!</h2>
      )}
    </div>
  )
}
