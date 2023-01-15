import styled from 'styled-components'
import { BLACK } from '../../../../theme/colors'
import { spacing } from '../../../../theme/helpers'
import { device } from '../../../../theme/media'

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: ${spacing(1, 0)};

  @media screen and ${device.laptop} {
    padding: ${spacing(16, 5, 10)};
    min-height: 100vh;
  }

  @media screen and ${device.laptopL} {
    padding: ${spacing(16, 10, 10)};
  }
`

export const Question = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: ${BLACK};
  margin-bottom: auto;
  padding: ${spacing(0, 1)};

  @media screen and ${device.laptop} {
    padding-bottom: ${spacing(4)};
  }
`

export const AnswerBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media screen and ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    width: 646px;
  }
`
