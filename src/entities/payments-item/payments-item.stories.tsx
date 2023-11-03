import { ComponentStory, ComponentMeta } from '@storybook/react-native'
import React from 'react'

import { PaymentsItem } from './payments-item'

const StoryMeta: ComponentMeta<typeof PaymentsItem> = {
  title: 'entities/payments-item',
  component: PaymentsItem,
  args: {},
  argTypes: {},
}

export default StoryMeta

export const CardStories: ComponentStory<typeof PaymentsItem> = () => (
  <PaymentsItem
    type={{
      category_id: '',
      category_name: 'Мобильная связь',
      category_icon:
        'https://raw.githubusercontent.com/kode-frontend/files/main/MTS.png',
      services: [],
    }}
    onPress={() => {}}
  />
)
