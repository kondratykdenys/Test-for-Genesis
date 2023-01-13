import styled from 'styled-components'
import { BLACK, BLACK_5 } from '../../../../theme/colors'
import { spacing } from '../../../../theme/helpers'

export const Root = styled.div`
  min-height: 100vh;
  background-color: ${BLACK_5};
  width: 100%;
  padding: ${spacing(16, 10, 10)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Question = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: ${BLACK};
  padding-bottom: ${spacing(4)};
  margin-bottom: auto;
`

export const AnswerBlock = styled.div`
  display: grid;
  grid-template-columns: 323px 323px;
  flex-wrap: wrap;
  min-width: 646px;
`
