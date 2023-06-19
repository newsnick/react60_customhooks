// useKeyPress: A custom hook that listens for keyboard key presses and returns the pressed key or a boolean value indicating whether a specific key is being pressed.

// Custom Hook (useKeyPress.js)
import { useState, useEffect } from 'react'

const useKeyPress = (targetKey) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false)

  const handleKeyDown = (event) => {
    if (event.key === targetKey) {
      setIsKeyPressed(true)
    }
  }

  const handleKeyUp = (event) => {
    if (event.key === targetKey) {
      setIsKeyPressed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [targetKey])

  return isKeyPressed
}

export default useKeyPress
