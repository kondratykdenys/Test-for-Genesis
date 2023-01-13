import styled from 'styled-components'
import { ORANGE, ORANGE_120, ORANGE_80 } from '../../theme/colors'

const Button = styled.button`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  background: ${ORANGE};
  border-radius: 12px;
  border: none;
  padding: 21px 24px;
  min-width: 296px;
  transition: 0.3s;

  &:hover {
    background: ${ORANGE_80};
  }

  &:active {
    background: ${ORANGE_120};
  }
`

export default Button
