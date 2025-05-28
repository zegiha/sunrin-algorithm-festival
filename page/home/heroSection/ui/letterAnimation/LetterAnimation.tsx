'use client'

import {Row} from '@/components/atom/flex'
import Chun from '@/page/home/heroSection/ui/letterAnimation/letter/Chun'
import Ha from '@/page/home/heroSection/ui/letterAnimation/letter/Ha'
import Il from '@/page/home/heroSection/ui/letterAnimation/letter/Il'
import Jae from '@/page/home/heroSection/ui/letterAnimation/letter/Jae'
import SubText from '@/page/home/heroSection/ui/letterAnimation/letter/SubText'
import style from '../style.module.css'

export default function LetterAnimation() {
  return (
    <Row justifyContent={'center'}>
      <Row

        className={style.letterAnimationGroup}
        width={'hug'}
        gap={20}
      >
        <Chun/>
        <Ha/>
        <Jae/>
        <Il/>
        <SubText/>
      </Row>
    </Row>
  )
}
