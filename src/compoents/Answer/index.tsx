import React, { FC } from 'react'
import styled from 'styled-components'
import { VariantAnswer } from '../../types/Answer'
import { BLACK, BLACK_40, ORANGE } from '../../theme/colors'
import { spacing } from '../../theme/helpers'

type RootProps = {
  selected: boolean
  correct: boolean | undefined
}

const Root = styled.button<RootProps>`
  padding: ${spacing(0, 5)};
  font-size: 14px;
  line-height: 116%;
  min-width: 322px;
  min-height: 56px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;

  background-image: ${({ selected, correct }) => {
    if (correct) {
      return `url("data:image/svg+xml,%3Csvg width='320' height='56' viewBox='0 0 320 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M303 28L320 28' stroke='%2347D867'/%3E%3Cpath d='M0 28L17 28' stroke='%2347D867'/%3E%3Cpath d='M32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576Z' fill='%23E6FAEA' stroke='%2347D867'/%3E%3C/svg%3E")`
    }

    if (correct === false) {
      return `url("data:image/svg+xml,%3Csvg width='320' height='56' viewBox='0 0 320 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M303 28L320 28' stroke='%23EC6259'/%3E%3Cpath d='M0 28L17 28' stroke='%23EC6259'/%3E%3Cpath d='M32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576Z' fill='%23FDEEED' stroke='%23EC6259'/%3E%3C/svg%3E");`
    }

    if (selected) {
      return `url("data:image/svg+xml,%3Csvg width='320' height='56' viewBox='0 0 320 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M303 28L320 28' stroke='%23FF8B37'/%3E%3Cpath d='M0 28L17 28' stroke='%23FF8B37'/%3E%3Cpath d='M32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576Z' fill='%23FFF3EB' stroke='%23FF8B37'/%3E%3C/svg%3E")`
    }

    // console.log(props)
    return `url("data:image/svg+xml,%3Csvg width='320' height='56' viewBox='0 0 320 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M303 28L320 28' stroke='%23D0D0D8'/%3E%3Cpath d='M0 28L17 28' stroke='%23D0D0D8'/%3E%3Cpath d='M42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5Z' fill='white' stroke='%23D0D0D8'/%3E%3C/svg%3E")`
  }};
`

const Variant = styled.span`
  font-weight: 600;
  color: ${ORANGE};
  margin-right: ${spacing(1)};
`

const Title = styled.span`
  font-weight: 400;
  color: ${BLACK};
`

type AnswerPropsType = {
  variant: VariantAnswer
  title: string
} & RootProps

const Answer: FC<AnswerPropsType> = ({ variant, title, selected, correct }) => {
  return (
    <Root correct={correct} selected={selected}>
      <Variant>{variant}</Variant>
      <Title>{title}</Title>
    </Root>
  )
}

export default Answer
