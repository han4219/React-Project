import styled, { keyframes } from 'styled-components'

export const KeyframeAnimationPopover = keyframes` 
  0% {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const WrapDrawer = styled.div`
  position: absolute;
  z-index: 20;
  right: 0;
  top: 100%;
`

export const Drawer = styled.div`
  position: relative;
  background: #fff;
  border-radius: 3px;
  animation: ${KeyframeAnimationPopover} 0.2s cubic-bezier(0.4, 0, 0.6, 1);
`
export const PopoverArrow = styled.div`
  position: absolute;
  z-index: -1;
  right: 1rem;
  top: -0.5rem;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  background-color: #fff;
`
export const PopoverContent = styled.div`
  display: flex;
  flex-direction: column;
`
