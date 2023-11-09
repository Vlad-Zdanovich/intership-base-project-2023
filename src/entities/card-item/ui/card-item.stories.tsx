import { ComponentStory, ComponentMeta } from '@storybook/react-native'
import React from 'react'

import { CardItem } from './card-item'

const StoryMeta: ComponentMeta<typeof CardItem> = {
  title: 'entities/card-item',
  component: CardItem,
  args: {},
  argTypes: {},
}

export default StoryMeta

export const CardItemStories: ComponentStory<typeof CardItem> = () => (
  <CardItem name="Тест" value="123 $" type="mastercard" />
)
