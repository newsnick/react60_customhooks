import React from 'react'
import UseCounter from './UseCounter'

function UserForm() {
  const counter = UseCounter(18, 1)

  return (
    <div>
      <h3>Age: {counter.count}</h3>
      <button onClick={counter.increment}>+</button>
      <button onClick={counter.decrement}>-</button>
    </div>
  )
}

export default UserForm
