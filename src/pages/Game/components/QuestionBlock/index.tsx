import React from 'react'
import { AnswerBlock, Question, Root } from './styles'
import Answer from '../../../../compoents/Answer'
import { VariantAnswer } from '../../../../types/Answer'

const QuestionBlock = () => {
  return (
    <Root>
      <Question>How old your elder brother was 10 years before you was born, mate?</Question>
      <AnswerBlock>
        <Answer variant={VariantAnswer.a} title="Inactive" selected={false} correct={undefined} />
        <Answer variant={VariantAnswer.b} title="Selected" selected={true} correct={undefined} />
        <Answer variant={VariantAnswer.c} title="Correct" selected={true} correct={true} />
        <Answer variant={VariantAnswer.d} title="Wrong" selected={true} correct={false} />
      </AnswerBlock>
    </Root>
  )
}

export default QuestionBlock
