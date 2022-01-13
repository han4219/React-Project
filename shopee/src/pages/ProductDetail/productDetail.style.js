import styled from 'styled-components'

export const ProductBrief = styled.div`
  margin-top: 1.5rem;
  display: flex;
  background-color: #fff;
`
export const ProductImage = styled.div`
  width: 480px;
  padding: 1.5rem;
`
export const ProductMainImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #ccc;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`
export const ProductSlide = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  max-width: 100%;
  max-height: 90px;
  img {
    padding: 2px;
    max-width: 8.8rem;
    max-height: 8.8rem;
    border: ${({ active }) => (active ? '2px solid #EE4D2D' : '')};
  }
`

export const ButtonIcon = styled.button`
  position: absolute;
  top: 50%;
  border: none;
  width: 2rem;
  height: 4rem;
  color: #fff;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.2);
  svg {
    width: 2rem;
    height: 2rem;
    fill: currentColor;
  }
`
export const ProductButtonIconPrev = styled(ButtonIcon)`
  left: 0;
`
export const ProductButtonIconNext = styled(ButtonIcon)`
  right: 0;
`
export const ProductImageItem = styled.div``

export const ProductMeta = styled.div`
  width: 100%;
  padding: 2rem 3.5rem 0 2rem;
`
export const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;
  word-wrap: break-word;
`
export const ProductSubMeta = styled.div`
  display: flex;
  margin-top: 1rem;
`
export const ProductRating = styled.div`
  border-right: 1px solid #dbdbdb;
  margin-right: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  color: #ee4d2d;
  font-size: 1.6rem;
  text-decoration: underline;
  line-height: 2rem;
  svg {
    margin-top: -3px;
    fill: #ee4d2d;
    width: 1.4rem;
    height: 1.4rem;
  }
`
export const ProductView = styled.div`
  text-decoration: underline;
  padding: 0 2rem;
  border-right: 1px solid #dbdbdb;
`
export const ProductSold = styled.div`
  padding: 0 2rem;
  text-decoration: underline;
`
export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  margin-top: 1rem;
  background: #fafafa;
  width: 100%;
`
export const ProductPriceOriginal = styled.div`
  padding: 0 1rem;
  text-decoration: line-through;
  color: #9f9292;
  font-size: 1.5rem;
  font-weight: 100;
`
export const ProductSale = styled.div`
  padding: 0 1rem;
  font-size: 2.5rem;
  color: #ee4d2d;
  font-weight: bold;
`
export const ProductPercentSale = styled.div`
  background-color: #ee4d2d;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
`
export const ProductQuantity = styled.div`
  color: #757575;
  align-items: center;
  display: flex;
  margin: 2rem;
  .text {
    text-transform: capitalize;
  }
`
export const ProductQuantityAvailable = styled.div``

export const AddToCart = styled.div``
export const AddToCartButton = styled.button`
  font-size: 1.8rem;
  color: #ee4d2d;
  border: none;
  padding: 1rem 2rem;
  border-radius: 3px;
  border: 1px solid #ee4d2d;
  background: rgba(255, 87, 34, 0.1);
  text-transform: capitalize;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
  i {
    margin-right: 5px;
  }
  &:hover {
    background: rgba(255, 87, 34, 0.05);
  }
`
export const ProductContent = styled.div`
  margin-top: 2rem;
  background-color: #fff;
  padding: 1.5rem 2rem;
`
export const ProductContentTitle = styled.div`
  width: 100%;
  background-color: #fafafa;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
`
export const ProductContentText = styled.div`
  padding: 1rem;
`
