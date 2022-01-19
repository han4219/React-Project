import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PurchaseWrapper = styled.div`
  display: flex;
`
export const PurchaseProfile = styled.div`
  max-width: 180px;
`
export const PurchaseProfileUser = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid #333;
`
export const PurchaseProfileUserAvatar = styled.div`
  img {
    max-width: 4.8rem;
    max-height: 4.8rem;
    border-radius: 50%;
  }
`
export const PurchaseProfileUserName = styled.div`
  margin-left: 1rem;
  a {
    font-size: 1.3rem;
    color: #000;
    &:hover {
      color: #ee4d2d;
    }
  }
`
export const PurchaseProfileBar = styled.div``
export const PurchaseProfileBarItem = styled(Link)`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  text-transform: capitalize;
  color: #000;
  &:hover {
    color: #ee4d2d;
  }
  img {
    max-width: 2rem;
    max-height: 2rem;
    margin-right: 1rem;
  }
  &.active-me {
    color: #ee4d2d;
  }
`

export const ProfileContent = styled.div`
  margin-left: 5rem;
  flex: 2;
  padding: 2rem;
  background: #fff;
  margin: 2rem 0 2rem 2rem;
`

export const ProfileContentTitle = styled.div`
  padding-bottom: 2rem;
  width: 100%;
  border-bottom: 1px solid #8888888c;
  p {
    font-size: 2rem;
    text-transform: capitalize;
    line-height: 3rem;
  }
  span {
    color: #555555;
  }
`
export const ProfileContentSection = styled.div`
  table {
    .title {
      float: right;
      margin-right: 1rem;
      padding: 1rem 0;
      color: #979595;
      text-transform: capitalize;
      font-size: 1.6rem;
    }
    .infor {
      width: 40rem;
      input {
        font-size: 1.6rem;
        border: 1px solid #88888c;
        padding: 0.3rem;
        color: #777777;
      }
    }
  }
`
