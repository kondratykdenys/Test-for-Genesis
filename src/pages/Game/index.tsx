import React from 'react'
import { Root } from './styles'
import QuestionBlock from './components/QuestionBlock'
import WinBlock from './components/WinBlock'

const Game = () => {
  return (
    <Root>
      <QuestionBlock />
      <WinBlock />
    </Root>
  )
}

export default Game
