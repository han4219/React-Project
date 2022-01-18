import React from 'react'
import * as S from './checkbox.style'

export default function CheckBox({ checked, onChange, ...props }) {
  const handleChange = e => {
    const value = e.target.checked
    onChange && onChange(value)
  }

  return (
    <S.Checkbox>
      <S.CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      <S.CheckboxBox />
    </S.Checkbox>
  )
}
