import Input from '../../atoms/Input'
import React from 'react'
export default {
  title: 'Atoms/Input',
  component: Input,
}

export const Text = () => (
  <Input onChange={() => {}} type="text" placeholder="Nombres">
    Input primary
  </Input>
)
