/* eslint-disable react/prop-types */
import { ComponentStory, ComponentMeta } from '@storybook/react-native'
import React from 'react'

import { CardItem } from './card-item'

const StoryMeta: ComponentMeta<typeof CardItem> = {
  title: 'entities/card-item',
  component: CardItem,
  args: {
    name: 'Тест',
    value: '123 $',
    type: 'mastercard',
  },
  argTypes: {},
}

export default StoryMeta

export const CardItemStories: ComponentStory<typeof CardItem> = ({
  name,
  value,
  type,
}) => <CardItem name={name} value={value} type={type} />
