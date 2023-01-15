import styled from 'styled-components'
import { device } from '../../../../theme/media'

export const Root = styled.div`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: auto;

  @media screen and ${device.laptop} {
    background-color: #fff;
    margin: 0;
  }
`
