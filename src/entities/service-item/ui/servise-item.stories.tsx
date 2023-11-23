import { ComponentStory, ComponentMeta } from '@storybook/react-native'
import React from 'react'

import { ServiceItem } from './servise-item'

const StoryMeta: ComponentMeta<typeof ServiceItem> = {
  title: 'entities/servise-item',
  component: ServiceItem,
  args: {
    service: {
      service_id: '',
      service_name: 'Тест',
      service_icon:
        'https://raw.githubusercontent.com/kode-frontend/files/main/MTS.png',
    },
  },
  argTypes: {},
}

export default StoryMeta

export const ServiceItemStories: ComponentStory<typeof ServiceItem> = ({
  // eslint-disable-next-line react/prop-types
  service,
}) => <ServiceItem service={service} onPress={() => {}} />
