import React, { useState } from 'react'

function useCounter(startingPoint = 0, plusOrMinus = 1) {
  const [count, setCount] = useState(startingPoint)

  const increment = () => {
    setCount((prevCount) => prevCount + plusOrMinus)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - plusOrMinus)
  }

  return {
    count,
    increment,
    decrement,
  }
}

export default useCounter
