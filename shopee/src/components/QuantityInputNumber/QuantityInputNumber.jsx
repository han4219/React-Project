import React from 'react'
import BaseInputNumber from '../BaseInputNumber/BaseInputNumber'
import * as S from './quantityInputNumber.style'

export default function QuantityInputNumber({ value, onChange, max }) {
  const handleChange = value => {
    let _value = Number(value)
    if (_value > max) {
      _value = max
    }
    if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
  }

  const increase = () => {
    let _value = Number(value)
    if (_value === 1) {
      _value = 1
    }
    if (_value > 1) {
      _value -= 1
    }
    onChange && onChange(_value)
  }

  const decrease = () => {
    let _value = Number(value)
    if (_value === max) {
      _value = max
    }
    if (_value < max) {
      _value += 1
    }
    onChange && onChange(_value)
  }

  return (
    <S.QuantityNumber>
      <S.QuantityIncreaseIcon onClick={increase}>
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
      <BaseInputNumber value={value} onChange={handleChange} />
      <S.QuantityDecreaseIcon onClick={decrease}>
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
