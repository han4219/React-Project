import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2rem 1rem 2rem;
`
export const Logo = styled(Link)`
  display: block;
  margin-right: 4rem;
  flex-grow: 1;
  svg {
    width: 162px;
    height: 50px;
    fill: #fff;
  }
`
export const SearchWrap = styled.div`
  position: relative;
  flex-grow: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 2rem;
`
export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 3px;
`
export const SearchButton = styled.i`
  position: absolute;
  right: 0.3rem;
  cursor: pointer;
  color: #fff;
  border-radius: 3px;
  padding: 0.8rem 2rem;
  background-color: #ee4d2d;
`
export const Cart = styled.div`
  padding: 0 1rem;
`
export const CartLogo = styled.div`
  position: relative;
  cursor: pointer;
  .popover {
    cursor: default;
  }
`
export const CartIcon = styled.i`
  color: #fff;
  font-size: 2rem;
  margin-top: 2rem;
`
export const CartNumberBidge = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 10;
  top: 1rem;
  right: -1rem;
  color: #f94e2f;
  font-size: 1.2rem;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  line-height: 2rem;
`

export const WrapContent = styled.div`
  max-width: 400px;
  cursor: default;
`

export const CartContentTitle = styled.div`
  color: rgba(0, 0, 0, 0.26);
  padding: 1rem 1rem 2rem 1rem;
`

export const WrapItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const CartContentItem = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  &:hover {
    background: #f8f8f8;
  }
`
export const CartContentItemImage = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
`
export const CartContentItemText = styled.div`
  padding: 0 1rem;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.4rem;
  max-height: 3rem;
  text-overflow: ellipsis;
  max-width: 280px;
`
export const CartContentItemPrice = styled.p`
  color: #ee4d2d;
`
export const CartFooter = styled.div`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const MoreProduct = styled.p`
  font-size: 1.2rem;
  cursor: default;
`
export const CartButton = styled(Link)`
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 3px;
  background: #ee4d2d;
`
