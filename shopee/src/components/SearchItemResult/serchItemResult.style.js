import styled from 'styled-components'

export const SortBar = styled.div`
  max-width: 90rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1.3rem 2rem;
  border-radius: 2px;
  background-color: #ededed;
  margin-bottom: 1.5rem;
`

export const SortBarLabel = styled.span``

export const SortOption = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-grow: 1;
`

export const SortByOption = styled.div`
  flex: 0 0 auto;
  margin-left: 1rem;
  padding: 0.7rem 1.5rem;
  background-color: #fff;
  border-radius: 2px;
  color: #000;
  cursor: pointer;
  &.active {
    color: #fff;
    background-color: #ee4d2d;
  }
`

export const SortByPrice = styled.select`
  flex: 0 0 auto;
  margin-left: 1rem;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  padding: 0.7rem 1.5rem;
  &.active {
    color: #ee4d2d;
  }
`

export const MiniPageController = styled.div`
  display: flex;
  align-items: center;
`

export const MiniPageControllerState = styled.div`
  display: flex;
  align-items: center;
`

export const MiniPaginationCurrent = styled.div`
  color: #ee4d2d;
`

export const MiniPaginationTotal = styled.div``

export const ButtonController = styled.button`
  box-shadow: 0px 1px 1px rgb(0 0 0 / 5%);
  width: 3.6rem;
  height: 3.4rem;
  border-radius: 2px;
  border: 0;
  background: ${({ disabled }) => (disabled ? '#f9f9f9' : '#fff')};
  svg {
    width: 0.825rem;
    height: 0.825rem;
    fill: ${({ disabled }) => (disabled ? '#ccc' : '#555')};
    margin-top: 0.125rem;
  }
`

export const ButtonControlPrev = styled(ButtonController)`
  margin-left: 2rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid #f2f2f2;
`

export const ButtonControlNext = styled(ButtonController)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

export const ProductList = styled.div`
  margin-left: 1rem;
  width: 90rem;
  display: flex;
  flex-wrap: wrap;
`
export const Pagination = styled.div``
