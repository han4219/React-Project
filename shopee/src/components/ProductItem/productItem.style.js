import styled from 'styled-components'

export const Product = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  padding: 0 5px;
  margin: 1rem 0;
`

export const ProductItem = styled.div`
  color: rgb(0, 0, 0, 0.8);
  background: #fff;
  box-shadow: 0 0.1rem 0.25rem 0 rgb(0 0 0 /10%);
  border-radius: 0.25rem;
  transition: all 0.1s ease;
  &:hover {
    box-shadow: 0 0.1rem 2rem 0 rgb(0 0 0 /5%);
    transform: translateY(-0.125rem);
  }
`

export const ProductItemImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  img {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    vertical-align: bottom;
  }
`

export const ProductItemInfor = styled.div`
  padding: 10px;
`

export const ProductItemTitle = styled.div`
  /* white-space: nowrap;
  overflow: hidden;
  line-height: 1.4rem;
  max-height: 3rem;
  text-overflow: ellipsis;
  max-width: 100%; */
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 1.2rem;
`

export const ProductItemPrice = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  margin-bottom: 1rem;
  color: #ee4d2d;
  width: 100%;
`

export const ProductItemPriceOriginal = styled.div`
  flex-shrink: 1;
  max-width: 50%;
  color: rgb(0, 0, 0, 0.54);
  text-decoration: line-through;
  font-size: 1.4rem;
  color: #0000008a;
  margin-right: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ProductItemPriceSale = styled.div`
  flex-grow: 1;
  color: #ee4d2d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    &:first-child {
      font-size: 1.2rem;
      color: #ee4d2d;
    }
    &:last-child {
      font-size: 1.6rem;
      color: #ee4d2d;
    }
  }
`

export const ProductItemMeta = styled.div`
  display: flex;
`

export const ProductItemSold = styled.div`
  color: rgb(0, 0, 0, 0.87);
  margin-left: 0.5rem;
  font-size: 1.2rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  span:first-child {
    margin-right: 3px;
  }
`
