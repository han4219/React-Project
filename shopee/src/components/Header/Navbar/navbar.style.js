import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 14px;
`

export const NavLeft = styled.div`
  text-transform: capitalize !important;
  padding: 7px 0;
`
export const LinkLeft = styled.a`
  color: #fff;
  padding: 0px 7px;
  border-right: 1.5px solid rgb(226, 215, 215);
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
`

export const SocialContainer = styled.p`
  display: inline-block;
  margin-left: 7px;
`

export const LinkFacebook = styled.a`
  color: #fff;
  padding: 0px 3px;
  font-size: 15px;
`

export const LinkInsta = styled.a`
  color: #fff;
  padding: 0px 3px;
  font-size: 15px;
`

// css for navright
export const NavRight = styled.div`
  text-transform: capitalize !important;
  display: flex;
  padding: 7px 0;
`

export const Notification = styled.a`
  padding: 0px 15px;
  color: #fff;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
`
export const Support = styled.a`
  padding: 0px 15px;
  color: #fff;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
`
export const Icon = styled.i`
  margin-right: 5px;
`
export const SelectLanguage = styled.select`
  color: #fff;
  border: none;
  background: transparent;
`
export const OptionLanguage = styled.option`
  border: none;
  color: #000;
`
export const Language = styled.p`
  cursor: pointer;
`
export const User = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
`

export const Avatar = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background-color: aqua;
  border-radius: 50%;
`

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const UserNameWrapper = styled.div``
export const UserName = styled.p`
  text-transform: none;
`
export const UserLink = styled(Link)`
  color: #000;
  padding: 10px 10px;
  transition: ease-in-out 0.2s;
  &:first-child {
    border-radius: 5px;
  }
  &:hover {
    color: #2ecab5;
    background: #fafafa;
  }
`

export const LoginLink = styled(Link)`
  color: #fff;
  margin: 5px;
  padding-right: 5px;
  border-right: 1.5px solid #fff;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
`
export const RegisterLink = styled(Link)`
  color: #fff;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
`
