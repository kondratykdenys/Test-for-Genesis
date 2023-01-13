import React, { useState } from 'react'
import { AnswerBlock, Question, Root } from './styles'
import Answer from '../../../../compoents/Answer'
import Button from '../../../../compoents/Button'
import { useAppDispatch, useAppSelector } from '../../../../hooks/app'
import {
  addResolvedQuestionUuid,
  resolvedQuestionUuidSelector,
} from '../../../../services/reducers/question'
import { useGetQuestionQuery, useReplyAnswerMutation } from '../../../../services/api'
import Loading from '../../../../compoents/Loading'
import { useNavigate } from 'react-router-dom'
import { winnerSum } from '../../../../constants/winner'

const QuestionBlock = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const resolvedQuestionUuid = useAppSelector(resolvedQuestionUuidSelector)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [correctAnswerUuid, setCorrectAnswerUuid] = useState<string | undefined>()
  const [replyAnswer, { isLoading: isLoadingReplyAnswer }] = useReplyAnswerMutation()

  const { data, isLoading } = useGetQuestionQuery(resolvedQuestionUuid)

  const handleReplyAnswer = async () => {
    if (data && selectedAnswer) {
      try {
        await replyAnswer({ questionUuid: data.uuid, answerUuid: selectedAnswer }).unwrap()

        // only for mock
        setCorrectAnswerUuid(data.correct)

        if (data.correct !== selectedAnswer) {
          setTimeout(() => {
            navigate('over')
          }, 2000)

          return
        }

        setTimeout(() => {
          setSelectedAnswer(null)
          dispatch(addResolvedQuestionUuid(selectedAnswer))
          setCorrectAnswerUuid(undefined)

          if (resolvedQuestionUuid.length >= winnerSum.length - 1) {
            navigate('over')
          }
        }, 1000)
      } catch (e) {
        // redirect to game over screen
        navigate('over')
      }

      return
    }
  }

  if (isLoading) {
    return (
      <Root>
        <Loading />
      </Root>
    )
  }

  if (!data) {
    return (
      <Root>
        <p>Error</p>
      </Root>
    )
  }

  return (
    <Root>
      <Question>{data.question}</Question>
      <AnswerBlock>
        {data.content.map(({ answer, uuid }, id) => (
          <Answer
            key={uuid}
            id={id}
            setSelected={() => setSelectedAnswer(uuid)}
            title={answer}
            disabled={!!correctAnswerUuid || isLoadingReplyAnswer}
            selected={selectedAnswer === uuid}
            correct={correctAnswerUuid === uuid}
            unCorrect={
              !!correctAnswerUuid && correctAnswerUuid !== selectedAnswer && selectedAnswer === uuid
            }
          />
        ))}
      </AnswerBlock>
      <Button
        onClick={handleReplyAnswer}
        disabled={!selectedAnswer || !!correctAnswerUuid}
        loading={isLoadingReplyAnswer}
      >
        Reply
      </Button>
    </Root>
  )
}

export default QuestionBlock
