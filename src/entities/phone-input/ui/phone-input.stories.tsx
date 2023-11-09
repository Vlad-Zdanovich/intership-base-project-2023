import { ComponentStory, ComponentMeta } from '@storybook/react-native'
import React from 'react'

import { PhoneInput } from './phone-input'

const StoryMeta: ComponentMeta<typeof PhoneInput> = {
  title: 'entities/phone-input',
  component: PhoneInput,
  args: {
    icon: 'https://raw.githubusercontent.com/kode-frontend/files/main/MTS.png',
    phone: '782313321',
  },
  argTypes: {
    phone: {
      name: '123',
      description: '31',
    },
  },
}

export default StoryMeta

export const PhoneInputStories: ComponentStory<typeof PhoneInput> = ({
  icon,
  phone,
}) => <PhoneInput icon={icon} phone={phone} setPhone={() => {}} />
