import styled from 'styled-components'
import { BLACK, ORANGE_5 } from '../../theme/colors'
import { spacing } from '../../theme/helpers'

export const Root = styled.div`
  background-color: ${ORANGE_5};
  background: linear-gradient(to right bottom, #fff 50%, ${ORANGE_5} 50%);
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ActionWrapper = styled.div`
  margin-left: ${spacing(12.5)};
`

export const Total = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: ${BLACK};
  margin-bottom: ${spacing(1)};
`

export const Sum = styled.h1`
  font-size: 56px;
  color: ${BLACK};
  margin-bottom: ${spacing(8)};
`
