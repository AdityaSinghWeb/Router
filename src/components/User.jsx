import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams()

  return (
    <>
      <h1>User Id:{userId}</h1>
    </>
  )
}

export default User
