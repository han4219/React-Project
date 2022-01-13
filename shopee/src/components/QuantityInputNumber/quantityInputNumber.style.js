import styled from 'styled-components'

export const QuantityNumber = styled.div`
  display: flex;
  margin: 0 1rem;
  border: 1px solid #e8e8e8;
`

export const QuantityIncreaseIcon = styled.button`
  border-right: 1px solid #e8e8e8;
  border-left: 0;
  border-bottom: 0;
  border-top: 0;
  width: 3.2rem;
  height: 3.2rem;
  background: transparent;
  color: #999999;
`
export const QuantityDecreaseIcon = styled.button`
  border-left: 1px solid #e8e8e8;
  border-right: 0;
  border-bottom: 0;
  border-top: 0;
  width: 3.2rem;
  height: 3.2rem;
  background: transparent;
  color: #999999;
`

export const QuantityInput = styled.input`
  width: 50px;
  height: 32px;
  border: 0;
  font-size: 16px;
  font-weight: 400;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  cursor: text;
  border-radius: 0;
  -webkit-appearance: none;
`
