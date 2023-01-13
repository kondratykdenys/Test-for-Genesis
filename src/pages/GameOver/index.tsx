import React from 'react'
import Button from '../../compoents/Button'
import { ActionWrapper, Root, Sum, Total } from './styles'
import logoMillionaire from '../../accets/icons/logo-logoMillionaire.svg'
import { useNavigate } from 'react-router-dom'
import {
  resetResolvedQuestionUuid,
  resolvedQuestionUuidSelector,
} from '../../services/reducers/question'
import { useAppDispatch, useAppSelector } from '../../hooks/app'
import { winnerSum } from '../../constants/winner'

const GameOver = () => {
  const dispatch = useAppDispatch()
  const resolvedQuestionUuid = useAppSelector(resolvedQuestionUuidSelector)
  const navigate = useNavigate()

  const handleGetStarted = () => {
    dispatch(resetResolvedQuestionUuid())
    navigate('/')
  }

  return (
    <Root>
      <img src={logoMillionaire} alt="logo Millionaire" />
      <ActionWrapper>
        <Total>Total score:</Total>
        <Sum>${winnerSum[resolvedQuestionUuid.length]} earned</Sum>
        <Button onClick={handleGetStarted}>Try again</Button>
      </ActionWrapper>
    </Root>
  )
}

export default GameOver
