import Picture from '../../atoms/Picture'
import React from 'react'

export default {
  title: 'Atoms/Picture',
  component: Picture,
}

export const Default = () => (
  <Picture src="https://placeimg.com/400/400/any" width={200} />
)
