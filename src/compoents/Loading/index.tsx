import React, { FC } from 'react'
import styled from 'styled-components'
import { GREEN_5 } from '../../theme/colors'

type LoadingProps = {
  size?: 'small'
}
const Root = styled.div<LoadingProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: ${({ size }) => (size === 'small' ? '24px' : '64px')};
    height: ${({ size }) => (size === 'small' ? '24px' : '64px')};
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ size }) => (size === 'small' ? '24px' : '64px')};
    height: ${({ size }) => (size === 'small' ? '24px' : '64px')};
    margin: ${({ size }) => (size === 'small' ? '3px' : '8px')};
    border: ${({ size }) => (size === 'small' ? '3px' : '8px')} solid ${GREEN_5};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${GREEN_5} transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const Loading: FC<LoadingProps> = (props) => {
  return (
    <Root {...props}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Root>
  )
}

export default Loading
