import styled from 'styled-components'
import { BLACK, ORANGE_5 } from '../../theme/colors'
import { spacing } from '../../theme/helpers'
import { device } from '../../theme/media'

export const Root = styled.div`
  padding: ${spacing(2)};
  background-color: ${ORANGE_5};
  background: linear-gradient(to right bottom, #fff 50%, ${ORANGE_5} 50%);
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    max-width: 200px;

    @media screen and ${device.laptop} {
      max-width: 100%;
    }
  }
`

export const ActionWrapper = styled.div`
  text-align: center;

  @media screen and ${device.laptop} {
    margin-left: ${spacing(12.5)};
    text-align: left;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  max-width: 624px;
  color: ${BLACK};
  margin-bottom: ${spacing(13)};

  @media screen and ${device.laptop} {
    font-size: 56px;
    margin-bottom: ${spacing(8)};
  }
`
