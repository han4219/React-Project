import React from 'react'
import * as S from './header.style'
import Navbar from './Navbar/Navbar'
import ContentHeader from './ContentHeader/ContentHeader'
export default function Header() {
  return (
    <S.StyledHeader>
      <Navbar />
      <ContentHeader></ContentHeader>
    </S.StyledHeader>
  )
}
