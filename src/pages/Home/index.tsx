import React from 'react'
import Button from '../../compoents/Button'
import { ActionWrapper, Root, Title } from './styles'
import logoMillionaire from '../../accets/icons/logo-logoMillionaire.svg'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Root>
      <img src={logoMillionaire} alt="logo Millionaire" />
      <ActionWrapper>
        <Title>Who wants to be a millionaire?</Title>
        <Button onClick={() => navigate('/game')}>Start</Button>
      </ActionWrapper>
    </Root>
  )
}

export default Home
