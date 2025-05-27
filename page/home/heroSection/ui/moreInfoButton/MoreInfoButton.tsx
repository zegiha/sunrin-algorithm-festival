'use client'

import {Row} from '@/components/atom/flex'
import {Icon} from '@/components/atom/icon'
import {Typo} from '@/components/atom/typo'
import style from '@/page/home/heroSection/ui/style.module.css'
import {interaction} from '@/shared/interaction'
import cn from 'classnames'

export default function MoreInfo() {
  return (
    <button
      className={cn(
        interaction.interaction,
        style.moreInfoButton
      )}
      style={{position: 'absolute'}}
    >
      <Row gap={8} alignItems={'center'}>
        <Icon
          iconKey={'keyboard_double_arrow_down'}
          size={20}
          color={'contents-static-white'}
        />
        <Typo.label weight={'regular'} color={'contents-static-white'}>
          더 알아보기
        </Typo.label>
      </Row>
    </button>
  )
}
