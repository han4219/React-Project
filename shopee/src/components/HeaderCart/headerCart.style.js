import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderNavbar = styled.header`
  background-color: #ee4d2d;
`
export const HeaderSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`
export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  color: #ee4d2d;
  align-items: flex-end;
  svg {
    width: 13rem;
    height: 4.6rem;
    margin-right: 2rem;
    margin-left: 2rem;
  }
`
export const Title = styled.p`
  text-transform: capitalize;
  font-size: 2rem;
  padding-bottom: 5px;
  padding-left: 2rem;
  border-left: 1px solid #ee4d2d;
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  height: 3.6rem;
`
export const Input = styled.input`
  width: 517px;
  height: 3.2rem;
  border: none;
  color: #333;
  text-indent: 1rem;
  outline: 2px solid #ee4d2d;
`
export const Button = styled.button`
  width: 8rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ee4d2d;
  svg {
    width: 1em;
    height: 1em;
    fill: #fff;
  }
`
