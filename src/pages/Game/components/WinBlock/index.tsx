import React from 'react'
import { Root } from './styles'
import Win from '../../../../compoents/Win'
import { winnerSum } from '../../../../constants/winner'
import { useAppSelector } from '../../../../hooks/app'
import { resolvedQuestionUuidSelector } from '../../../../services/reducers/question'

const WinBlock = () => {
  const resolvedQuestionUuid = useAppSelector(resolvedQuestionUuidSelector)
  return (
    <Root>
      {winnerSum
        .map((item, id) => (
          <Win
            key={item}
            sum={item}
            win={resolvedQuestionUuid.length > id}
            current={resolvedQuestionUuid.length === id}
          />
        ))
        .reverse()}
    </Root>
  )
}

export default WinBlock
