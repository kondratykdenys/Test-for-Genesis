import React, { FC } from 'react'
import styled from 'styled-components'
import { BLACK, BLACK_40, ORANGE } from '../../theme/colors'
import { spacing } from '../../theme/helpers'

type RootProps = {
  current: boolean
  win: boolean
}

const Root = styled.div<RootProps>`
  padding: ${spacing(0, 5)};
  font-size: 20px;
  min-width: 378px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${spacing(1)};
  color: ${({ win, current }) => (current ? ORANGE : win ? BLACK : BLACK_40)};

  background-image: ${({ current }) => {
    if (current) {
      return `url("data:image/svg+xml,%3Csvg width='376' height='40' viewBox='0 0 376 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M69 20H0' stroke='%23FF8B37'/%3E%3Cpath d='M376 20H307' stroke='%23FF8B37'/%3E%3Cpath d='M90.2872 0.5H285.713C289.126 0.5 292.362 2.01596 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6375 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5Z' fill='white' stroke='%23FF8B37'/%3E%3C/svg%3E");`
    }

    return `url("data:image/svg+xml,%3Csvg width='376' height='40' viewBox='0 0 376 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M69 20H0' stroke='%23D0D0D8'/%3E%3Cpath d='M376 20H307' stroke='%23D0D0D8'/%3E%3Cpath d='M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z' fill='white' stroke='%23D0D0D8'/%3E%3C/svg%3E");`
  }};
`

const Sum = styled.span`
  font-weight: 400;
`

type WinPropsType = {
  sum: number
} & RootProps

const Win: FC<WinPropsType> = ({ sum, current, win }) => {
  return (
    <Root current={current} win={win}>
      <Sum>${sum}</Sum>
    </Root>
  )
}

export default Win
