import React, { useState } from 'react'

function useForm(initialState) {
  let [userData, setUserData] = useState(initialState)

  let updateUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
  }

  let resetUserData = (event) => {
    setUserData(initialState)
  }

  return {
    userData,
    updateUserData,
    resetUserData,
  }
}

export default useForm
