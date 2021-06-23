import React from 'react'
import Icon from '../../atoms/Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon,
}

export const ArrowRight = () => <Icon type="arrowRight">Icon arrowRight</Icon>
export const AngleDown = () => <Icon type="angleDown">Icon angleDown</Icon>
export const HasBackground = () => (
  <Icon type="angleDown" hasBackground>
    Icon angleDown
  </Icon>
)
