import { ComponentStory, ComponentMeta } from '@storybook/react-native'
import React from 'react'

import { ServiceItem } from './servise-item'

const StoryMeta: ComponentMeta<typeof ServiceItem> = {
  title: 'entities/servise-item',
  component: ServiceItem,
  args: {},
  argTypes: {},
}

export default StoryMeta

export const CardStories: ComponentStory<typeof ServiceItem> = () => (
  <ServiceItem
    service={{
      service_id: '',
      service_name: 'Тест',
      service_icon:
        'https://raw.githubusercontent.com/kode-frontend/files/main/MTS.png',
    }}
    onPress={() => {}}
  />
)
