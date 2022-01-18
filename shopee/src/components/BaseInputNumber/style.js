import styled from 'styled-components'

export const BaseInputNumber = styled.input`
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
  &[disabled] {
    color: #ccc;
  }
`
