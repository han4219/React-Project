import React from 'react'
import * as S from './style'

export default function BaseInputNumber({ onChange, onBlur, value, ...props }) {
  const handleChange = e => {
    const val = e.target.value
    if ((/^\d+$/.test(val) || val === '') && onChange) {
      onChange(val)
    }
  }

  const handleBlur = e => {
    const value = e.target.value
    onBlur && onBlur(value)
  }

  return (
    <S.BaseInputNumber
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
    />
  )
}
