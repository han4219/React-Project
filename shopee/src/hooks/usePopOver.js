import { useState } from 'react'

export default function usePopOver() {
  const [activePopOver, setActivePopOver] = useState(false)
  const showPopOver = () => {
    setActivePopOver(true)
  }
  const hidePopOver = () => {
    setActivePopOver(false)
  }
  return {
    activePopOver,
    showPopOver,
    hidePopOver
  }
}
