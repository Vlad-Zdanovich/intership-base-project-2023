import { ComponentStory, ComponentMeta } from '@storybook/react-native'
import React from 'react'

import { ChipsSelection } from './chips-selection'

const StoryMeta: ComponentMeta<typeof ChipsSelection> = {
  title: 'entities/chips-selectiony',
  component: ChipsSelection,
  args: {},
  argTypes: {},
}

export default StoryMeta

export const CardStories: ComponentStory<typeof ChipsSelection> = () => (
  <ChipsSelection onChipsTapped={() => {}} />
)
