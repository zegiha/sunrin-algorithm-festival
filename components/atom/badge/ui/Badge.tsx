import IBadge from '@/components/atom/badge/const/IBadge'
import {Typo} from '@/components/atom/typo'
import style from './style.module.css'
import cn from 'classnames'

export default function Badge({
  color,
  contents
}: IBadge) {
  return (
    <div className={cn(
      style.container,
      style[color]
    )}>
      <Typo.footnote weight={'regular'}>
        {contents}
      </Typo.footnote>
    </div>
  )
}