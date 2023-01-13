import styled from 'styled-components'
import { BLACK, BLACK_5 } from '../../../../theme/colors'
import { spacing } from '../../../../theme/helpers'

export const Root = styled.div`
  min-height: 100vh;
  background-color: ${BLACK_5};
  width: 100%;
  padding: ${spacing(16, 10)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Question = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 116%;
  color: ${BLACK};
`

export const AnswerBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 646px;
`
