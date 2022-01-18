import styled from 'styled-components'

export const ProductHeader = styled.div`
  display: flex;
  text-transform: capitalize;
  padding: 2rem;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`

export const ProductHeaderLeft = styled.div`
  flex-basis: 50%;
  color: #333333;
  display: flex;
  padding-left: 2rem;
`
export const ProductHeaderRight = styled.div`
  display: flex;
  flex-basis: 50%;
  color: #888888;
  padding-right: 6rem;
  justify-content: space-between;
`
export const ProductHeaderCheckbox = styled.div``
export const ProductHeaderName = styled.div`
  margin-left: 2rem;
`
export const ProductHeaderPrice = styled.div``
export const ProductHeaderQuantity = styled.div``
export const ProductHeaderTotalPrice = styled.div``
export const ProductHeaderAction = styled.div``
// end header product cart

export const CartSection = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: #fff;
`
export const CartProductItem = styled.div`
  border: 1px solid #e8e8e8;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartProductItemLeft = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
`

export const CartProductItemRight = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CartProductItemCheckbox = styled.div``
export const CartProductItemImage = styled.div`
  margin-left: 1rem;
  img {
    border: 1px solid #e57575;
    max-width: 8rem;
    max-height: 8rem;
  }
`
export const CartProductItemName = styled.div`
  padding: 0 1rem;
  overflow: hidden;
  line-height: 1.4rem;
  max-width: 250px;
  max-height: 32px;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const CartProductItemCategory = styled.div`
  font-size: 1.2rem;
  color: #888888;
`
export const CartProductItemPrice = styled.div`
  font-size: 1.2rem;
  .top {
    display: flex;
  }
`
export const CartProductItemTotalPrice = styled.div`
  margin-left: -5rem;
`
export const CartProductItemPriceOrigin = styled.div`
  color: #888888;
  text-decoration: line-through;
  margin-right: 1rem;
`
export const CartProductItemPriceSale = styled.div`
  font-size: 1.3rem;
  color: #000;
`
export const CartProductItemPercentDiscount = styled.div`
  color: #ee4d2d;
`
export const CartProductItemQuantity = styled.div`
  margin-left: -5rem;
`
export const CartProductItemDelete = styled.button`
  margin-right: 5rem;
  border: none;
  background: transparent;
  &:hover {
    color: #ee4d2d;
  }
`
//end cart section

export const CartFooter = styled.div`
  background-color: #fff;
  padding: 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const CartFooterLeft = styled.div`
  display: flex;
`
export const CartFooterRight = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`
export const CartFooterCheckbox = styled.div`
  margin-right: 1rem;
`
export const CartFooterSelectAll = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  text-transform: capitalize;
`

export const CartFooterDeleteAllButton = styled.button`
  color: #000;
  background: transparent;
  border: none;
  margin-left: 5rem;
  font-size: 1.8rem;
  &:hover {
    color: #ee4d2d;
  }
`

export const CartFooterTotalPrice = styled.div`
  display: flex;
  align-items: center;
  p {
    color: #ee4d2d;
    margin: 0 1rem;
    font-size: 2.2rem;
    span {
      font-size: 1.4rem;
    }
  }
`
export const CartFooterBuyButton = styled.button`
  background: #ee4d2d;
  border-radius: 3px;
  border: none;
  color: #fff;
  text-transform: capitalize;
  padding: 1rem 3rem;
`
