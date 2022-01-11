import styled from 'styled-components'

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto 4rem;
`
export const ButtonPaginate = styled.button`
  color: rgb(0, 0, 0, 0.4);
  min-width: 4rem;
  height: 3rem;
  margin: 0 1.5rem;
  border: none;
  background-color: transparent;
  font-size: 2rem;
  border-radius: 2px;
  svg {
    fill: currentColor;
  }
`
export const ButtonIcon = styled(ButtonPaginate)`
  svg {
    fill: currentColor;
    width: 1.4rem;
    height: 1.4rem;
  }
`
export const ButtonNoOutline = styled(ButtonPaginate)`
  &.active {
    color: #fff;
    background-color: #ee4d2d;
    transition: background 0.2s ease;
    &:hover {
      color: #fff;
    }
  }
  &:hover {
    color: #ee4d2d;
  }
`
