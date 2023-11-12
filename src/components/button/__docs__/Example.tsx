import React, { FC } from 'react'
import { Button, IButtonProps } from '../Button'
import { EComponentSize } from '../../../types'

const Example: FC<IButtonProps> = (props) => {
  const {

  } = props

  return (
    <div
      style={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      } }
    >
      <Button
        size={ EComponentSize.LARGE }
      >
        Example
      </Button>
    </div>
  )
}

export default Example
