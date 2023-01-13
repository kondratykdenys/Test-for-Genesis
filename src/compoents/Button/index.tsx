import React, { FC } from 'react'
import styled from 'styled-components'
import { BLACK_40, ORANGE, ORANGE_120, ORANGE_5, ORANGE_80 } from '../../theme/colors'
import Loading from '../Loading'

const Root = styled.button`
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  background: ${ORANGE};
  border-radius: 12px;
  border: none;
  padding: 21px 24px;
  min-width: 296px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${ORANGE_80};
  }

  &:active {
    background: ${ORANGE_120};
  }

  &:disabled {
    background: ${ORANGE_5};
    color: ${BLACK_40};
    cursor: initial;
  }
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

const Button: FC<ButtonProps> = ({ loading, children, ...props }) => {
  return <Root {...props}>{loading ? <Loading size="small" /> : children}</Root>
}

export default Button
