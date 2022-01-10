import styled from 'styled-components'
import { Link } from 'react-router-dom'
import BaseInputNumber from '../BaseInputNumber/BaseInputNumber'

export const CategoryTitleLink = styled(Link)`
  color: #000000cc;
  display: block;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1rem 0;
  text-transform: capitalize;
  border-bottom: 1px solid #e9e9e9;
  i {
    margin-right: 10px;
    font-size: 1.3rem;
  }
`

export const CategoryList = styled.ul`
  padding: 1rem 1rem;
  a {
    display: block;
    color: #000;
    text-transform: capitalize;
    padding: 0.5rem 0;
  }
  .first-child {
    font-weight: bold;
    i {
      transform: rotate(90deg);
      margin: 0 5px 0 -15px;
      font-size: 1.2rem;
    }
  }
`
export const CategoryItem = styled.li`
  .active {
    color: #ee4d2d;
  }
`
export const CategoryTitle = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  i {
    font-size: 1.3rem;
    margin-right: 1rem;
  }
`
export const FilterGroup = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding: 2rem 0;
`
export const FilterGroupHeader = styled.div`
  margin-bottom: 1rem;
  color: #000000cc;
  font-size: 1.4rem;
  text-transform: capitalize;
`
export const PriceRange = styled.div``
export const PriceRangeGroup = styled.div`
  display: flex;
`
export const PriceRangeInput = styled(BaseInputNumber)`
  font-size: 1.2rem;
  text-indent: 0%.5rem;
  padding: 0.5rem 0;
  width: 8rem;
  border: 1px solid #bdbdbd;
  box-shadow: inset 0 0 1px #bdbdbd;
`
export const PriceRangeLine = styled.div`
  margin: auto 1rem;
  width: 1rem;
  height: 0.1rem;
  background-color: #bdbdbd;
`
export const PriceErrorMessage = styled.div`
  font-size: 1.2rem;
  color: #ff424f;
  padding: 1rem 0;
`
export const PriceRangeButton = styled.button`
  border: none;
  padding: 0.7rem 0;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  border-radius: 3px;
  background-color: #ee4d2d;
`
export const RemoveFilterButton = styled.button`
  width: 100%;
  padding: 0.7rem 0;
  border: none;
  background-color: #ee4d2d;
  margin-top: 2rem;
  border-radius: 3px;
  color: #fff;
  text-transform: uppercase;
`
