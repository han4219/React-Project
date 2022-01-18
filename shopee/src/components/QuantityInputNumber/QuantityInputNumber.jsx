import React from 'react'
import BaseInputNumber from '../BaseInputNumber/BaseInputNumber'
import * as S from './quantityInputNumber.style'

export default function QuantityInputNumber({
  value,
  onChange,
  max,
  onIncrease,
  onDecrease,
  onBlur,
  disabled,
  onInput
}) {
  const handleChange = value => {
    let _value = Number(value)
    if (_value > max) {
      _value = max
    }
    if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
    onInput && onInput(_value)
  }

  const increase = () => {
    let _value = value + 1
    if (_value > max) {
      _value = max
    }
    onChange && onChange(_value)
    onIncrease && onIncrease(_value)
  }

  const decrease = () => {
    let _value = value - 1
    if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
    onDecrease && onDecrease(_value)
  }

  const handleBlur = value => {
    onBlur && onBlur(Number(value))
  }

  return (
    <S.QuantityNumber>
      <S.QuantityDecreaseIcon
        onClick={() => {
          !disabled && decrease()
        }}
        disabled={disabled}
      >
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon"
        >
          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5" />
        </svg>
      </S.QuantityDecreaseIcon>
      <BaseInputNumber
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
      />
      <S.QuantityIncreaseIcon
        onClick={() => {
          !disabled && increase()
        }}
        disabled={disabled}
      >
        <svg
          enableBackground="new 0 0 10 10"
          viewBox="0 0 10 10"
          x={0}
          y={0}
          className="shopee-svg-icon icon-plus-sign"
        >
          <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
        </svg>
      </S.QuantityIncreaseIcon>
    </S.QuantityNumber>
  )
}
