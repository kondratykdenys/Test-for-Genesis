import React from 'react'
import { useBoolean, useMediaQuery } from 'usehooks-ts'
import QuestionBlock from './components/QuestionBlock'
import WinBlock from './components/WinBlock'
import { MenuButton, MobileHeader, Root } from './styles'
import { device } from '../../theme/media'

const Game = () => {
  const useDesktop = useMediaQuery(device.laptop)
  const { value, toggle } = useBoolean(false) // for menu

  if (useDesktop) {
    return (
      <Root>
        <QuestionBlock />
        <WinBlock />
      </Root>
    )
  }

  return (
    <Root>
      <MobileHeader>
        <MenuButton open={value} onClick={toggle} />
      </MobileHeader>
      {value ? <WinBlock /> : <QuestionBlock />}
    </Root>
  )
}

export default Game
