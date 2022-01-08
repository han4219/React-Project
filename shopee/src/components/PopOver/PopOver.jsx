import React from 'react'
import PropTypes from 'prop-types'
import * as S from './popover.style'

export default function PopOver({ active, children }) {
  return (
    <>
      {active && (
        <S.WrapDrawer>
          <S.Drawer>
            <S.PopoverArrow></S.PopoverArrow>
            <S.PopoverContent>{children}</S.PopoverContent>
          </S.Drawer>
        </S.WrapDrawer>
      )}
    </>
  )
}

PopOver.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
