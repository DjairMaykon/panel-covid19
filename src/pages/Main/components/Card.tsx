import { memo, ReactElement } from 'react'
import { Card as CardUI } from '../../../components'
import { LabelStyled, ValueStyled, CardContentStyled } from './style'

type CardProps = {
  value: number | ReactElement
  label: string | ReactElement
  color: string
}
function Card({ value, label, color }: CardProps) {
  return (
    <CardUI>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </CardUI>
  )
}

export default memo(Card)
