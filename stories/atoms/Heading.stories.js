import React from 'react'
import Heading from '../../atoms/Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
}

export const Default = () => <Heading>Default Heading</Heading>

export const Colors = () => (
  <>
    <Heading color="default">Default Heading Color</Heading>
    <Heading color="primary">Primary Heading Color</Heading>
  </>
)

export const Sizes = () => (
  <>
    <Heading size="xs">console.log('Mis historias con Storybook') ;</Heading>
    <Heading size="md">console.log('Mis historias con Storybook') ;</Heading>
    <Heading size="lg">console.log('Mis historias con Storybook');</Heading>
    <Heading size="xl">console.log('Mis historias con Storybook');</Heading>
    <Heading size="2xl">console.log('Mis historias con Storybook');</Heading>
  </>
)
