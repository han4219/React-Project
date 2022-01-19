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
  &.active-purchase {
    color: #ee4d2d;
  }
`

export const PurchaseContent = styled.div`
  margin-left: 5rem;
  flex: 2;
  padding: 2rem 0;
`
export const PurchaseContentHeader = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-around;
`
export const PurchaseContentHeaderAll = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`
export const PurchaseContentHeaderWatting = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`
export const PurchaseContentHeaderOnGetting = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`
export const PurchaseContentHeaderOnDelivery = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`
export const PurchaseContentHeaderReceived = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`
export const PurchaseContentHeaderCancel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`
export const PurchaseContentSection = styled.div`
  margin-top: 2rem;
`
export const PurchaseContentSectionItem = styled.div`
  padding: 2rem;
  background: #fff;
  margin-top: 1rem;
`

export const PurchaseContentSectionItemInfor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #4c4c4c4f;
`
export const PurchaseContentSectionItemInforLeft = styled.div`
  display: flex;
  align-items: center;
`
export const PurchaseContentSectionItemInforLeftImage = styled.div`
  img {
    max-width: 8rem;
    max-height: 8rem;
  }
`
export const PurchaseContentSectionItemInforLeftName = styled.div`
  margin-left: 2rem;
  .category {
    color: #757575;
  }
  p,
  span {
    line-height: 2rem;
  }
`
export const PurchaseContentSectionItemInforRight = styled.div`
  display: flex;
  .origin {
    color: #8888889e;
    text-decoration: line-through;
    font-size: 1.3rem;
  }
  .sale {
    color: #ee4d2d;
    margin-left: 1rem;
  }
`
export const PurchaseContentSectionItemAction = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  align-items: center;
`
export const PurchaseContentSectionItemActionPrice = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  span {
    color: #ee4d2d;
    padding: 0 1rem;
  }
`
export const PurchaseContentSectionItemActionCancel = styled.button`
  border: none;
  background: #ee4d2d;
  color: #fff;
  padding: 1rem 2.5rem;
  text-transform: capitalize;
`
