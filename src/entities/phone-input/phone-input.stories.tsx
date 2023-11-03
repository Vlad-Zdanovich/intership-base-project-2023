import { ComponentStory, ComponentMeta } from '@storybook/react-native'
import React from 'react'

import { PhoneInput } from './phone-input'

const StoryMeta: ComponentMeta<typeof PhoneInput> = {
  title: 'entities/phone-input',
  component: PhoneInput,
  args: {},
  argTypes: {},
}

export default StoryMeta

export const CardStories: ComponentStory<typeof PhoneInput> = () => (
  <PhoneInput
    icon="https://raw.githubusercontent.com/kode-frontend/files/main/MTS.png"
    onValueChange={() => {}}
  />
)
