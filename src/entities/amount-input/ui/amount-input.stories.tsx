import { ComponentStory, ComponentMeta } from '@storybook/react-native'
import React from 'react'

import { AmountInput } from './amount-input'

const StoryMeta: ComponentMeta<typeof AmountInput> = {
  title: 'entities/amount-input',
  component: AmountInput,
  args: {},
  argTypes: {},
}

export default StoryMeta

export const AmountInputStories: ComponentStory<typeof AmountInput> = () => (
  <AmountInput inputValue={0} setInputValue={() => {}} />
)
