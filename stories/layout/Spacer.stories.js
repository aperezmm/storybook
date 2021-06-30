import React from 'react'
import Spacer from '../../layout/Spacer'

export default {
  title: 'Layout/Spacer',
  component: Spacer,
}

export const Zero = () => <Spacer size="none" isVisible></Spacer>
export const ExtraSmall = () => <Spacer size="xs" isVisible></Spacer>
export const Small = () => <Spacer size="sm" isVisible></Spacer>
export const Medium = () => <Spacer size="md" isVisible></Spacer>
export const Large = () => <Spacer size="lg" isVisible></Spacer>
export const LargeHorizontal = () => (
  <Spacer.Horizontal size="lg" isVisible></Spacer.Horizontal>
)
export const LargeVertical = () => (
  <Spacer.Vertical size="lg" isVisible></Spacer.Vertical>
)
