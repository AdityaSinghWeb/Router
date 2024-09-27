// import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function GitHub() {
   const data = useLoaderData()

//    const [data, setData] = useState()

//    useEffect(() => {
//       fetch('https://api.github.com/users/AdityaSinghWeb')
//        .then((response) => response.json())
//        .then((data) => {
//         console.log(data)
//         setData(data)
//        })
//     }, [])

  return (
    <>
      <h1>GitHub Followers: {data.followers}</h1>
      <img src={data.avatar_url} alt="profile" />
    </>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/AdityaSinghWeb')
    return response.json()
}

