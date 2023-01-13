import React from 'react'
import { Root } from './styles'
import QuestionBlock from './components/QuestionBlock'
import Win from './components/Win'

const Game = () => {
  return (
    <Root>
      <QuestionBlock />
      <Win />
    </Root>
  )
}

export default Game
