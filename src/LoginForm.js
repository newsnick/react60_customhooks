import React from 'react'
import useForm from './useForm'

function LoginForm() {
  let initialState = { username: '', password: '' }
  let { userData, updateUserData, resetUserData } = useForm(initialState)

  let submitForm = (event) => {
    event.preventDefault()
    console.log(userData)
  }

  return (
    <div>
      <form onSubmit={submitForm} className="form-group" action="">
        <input
          className="form-control"
          value={userData.username}
          onChange={updateUserData}
          name="username"
          type="text"
          placeholder="username"
        />
        <br />
        <input
          className="form-control"
          value={userData.password}
          onChange={updateUserData}
          name="password"
          type="text"
          placeholder="password"
        />
        <br />
        <button className="form-control btn btn-primary">Login</button>&nbsp;
        <button className="form-control btn btn-danger" onClick={resetUserData}>
          Reset
        </button>
      </form>
    </div>
  )
}

export default LoginForm
