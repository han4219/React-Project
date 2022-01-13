import React, { useState } from 'react'
import * as S from './quantityInputNumber.style'

export default function QuantityInputNumber() {
  const [value, setValue] = useState('')
  const handleChange = e => {
    const val = e.target.value
    if (/[0-9]/.test(val)) {
      setValue(val)
    }
  }
  return (
    <S.QuantityNumber>
      <S.QuantityIncreaseIcon>
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon"
        >
          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
        </svg>
      </S.QuantityIncreaseIcon>
      <S.QuantityInput
        className="input-number"
        value={value}
        onChange={e => handleChange(e)}
      ></S.QuantityInput>
      <S.QuantityDecreaseIcon>
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon icon-plus-sign"
        >
          <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
        </svg>
      </S.QuantityDecreaseIcon>
    </S.QuantityNumber>
  )
}
