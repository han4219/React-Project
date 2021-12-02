import React from 'react'
import * as S from './errorMessage.style'

export default function ErrorMessage({ message }) {
  return (
    <S.Message>
      <p>{message}</p>
    </S.Message>
  )
}
