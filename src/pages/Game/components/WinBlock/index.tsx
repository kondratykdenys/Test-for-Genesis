import React from 'react'
import { Root } from './styles'
import Win from '../../../../compoents/Win'

const WinBlock = () => {
  return (
    <Root>
      <Win sum={1000} win={true} current={false} />
      <Win sum={1000} win={true} current={false} />
      <Win sum={1000} win={true} current={false} />
      <Win sum={1000} win={true} current={false} />
      <Win sum={1000} win={false} current={true} />
      <Win sum={1000} win={false} current={false} />
      <Win sum={1000} win={false} current={false} />
      <Win sum={1000} win={false} current={false} />
      <Win sum={1000} win={false} current={false} />
      <Win sum={1000} win={false} current={false} />
      <Win sum={100} win={false} current={false} />
    </Root>
  )
}

export default WinBlock
