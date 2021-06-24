import Dropdown from '../../molecules/Dropdown'
import React from 'react'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  argTypes: { onChange: { action: 'changed' } },
}

export const Default = () => (
  <Dropdown
    onChange={() => {}} //TODO: implement this
    options={[
      {
        text: '8:00 AM',
        value: 800,
      },
      {
        text: '10:00 AM',
        value: 1000,
      },
      {
        text: '1:00 PM',
        value: 1300,
      },
      {
        text: '3:00 PM',
        value: 1500,
      },
    ]}
  />
)
