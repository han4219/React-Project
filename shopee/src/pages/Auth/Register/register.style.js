import { Button } from 'src/assets/styles/utilities'
import styled from 'styled-components'

export const Container = styled.div`
  background-image: url('https://cf.shopee.vn/file/c6aa814bd4bb4b3d755b917cb6aaff0a');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 60rem;
  display: flex;
  align-items: center;
`

export const Left = styled.div`
  flex: 0 0 60%;
  max-width: 60%;
`

export const FormWrapper = styled.div`
  flex: 0 0 40%;
  max-width: 30%;
  padding: 3rem;
  margin: 8.5rem 0;
  border-radius: 2px;
  background-color: #fff;
`
export const FormTitle = styled.div`
  color: #222;
  font-size: 2rem;
  margin-bottom: 3rem;
  text-transform: capitalize;
`

export const Form = styled.form``

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const FormButton = styled.div`
  margin-bottom: 3rem;
  ${Button} {
    width: 100%;
    height: 4rem;
    font-size: 1.4rem;
    color: #fff;
    text-transform: uppercase;
  }
`

export const FormFooter = styled.div`
  text-align: center;
  span {
    color: rgba(0, 0, 0, 0.26);
    padding-right: 4px;
  }
`
