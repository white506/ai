import type { Meta, StoryObj } from '@storybook/react'

import Example from './Example'
import { EComponentSize } from '../../../types'

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
}

export default meta
type Story = StoryObj<typeof Example>

export const Large: Story = {
  args: {
    size: EComponentSize.MEDIUM
  }
}
