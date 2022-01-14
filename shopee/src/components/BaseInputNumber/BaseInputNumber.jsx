import React from 'react'
import * as S from './style'

export default function BaseInputNumber({ onChange, value, ...props }) {
  const handleChange = e => {
    const val = e.target.value
    if ((/^\d+$/.test(val) || val === '') && onChange) {
      onChange(val)
    }
  }

  return (
    <S.BaseInputNumber
      type="text"
      value={value}
      onChange={handleChange}
      {...props}
    />
  )
}
