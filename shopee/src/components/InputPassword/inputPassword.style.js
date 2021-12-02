import styled from 'styled-components'

export const FormControl = styled.div`
  overflow: hidden;
  box-shadow: inset 0px 2px 0px rgba(0 0 0 / 2%);
  width: 100%;
  height: 4rem;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  border: ${({ focus }) => (focus ? '1px solid rgba(0, 0, 0, .54)' : '')};
  input {
    flex-grow: 1;
    outline: none;
    border: 0;
    padding: 1.2rem;
  }
  button {
    flex-shrink: 0;
    padding: 0 1rem;
    border: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
