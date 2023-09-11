import { ComponentStory, ComponentMeta } from '@storybook/react-native'
import React from 'react'

import { Card } from './card'

const StoryMeta: ComponentMeta<typeof Card> = {
  title: 'entities/your-entity/ui',
  component: Card,
  args: {},
  argTypes: {},
}

export default StoryMeta

export const CardStories: ComponentStory<typeof Card> = () => <Card />
