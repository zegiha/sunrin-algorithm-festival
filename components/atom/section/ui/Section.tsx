import {Col} from '@/components/atom/flex'
import {ReactNode} from 'react'
import style from './style.module.css'
import cn from 'classnames'

function box({
  backgroundColor='default',
  children,
}: {
  backgroundColor?: 'default' | 'alternative'
  children?: ReactNode
}) {
  return (
    <Col
      className={cn(
        style.container,
        style[backgroundColor]
      )}
      alignItems={'center'}
      gap={32}
    >
      {children}
    </Col>
  )
}

function item({
  children
}:{
  children?: ReactNode
}) {
  return (
    <Col className={style.wrapper} width={'fill'}>
      {children}
    </Col>
  )
}

export const Section = {
  box,
  item,
}
