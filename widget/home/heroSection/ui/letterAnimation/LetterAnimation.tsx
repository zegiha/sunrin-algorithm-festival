import {Row} from '@/components/atom/flex'
import Chun from '@/widget/home/heroSection/ui/letterAnimation/letter/Chun'
import Ha from '@/widget/home/heroSection/ui/letterAnimation/letter/Ha'
import Il from '@/widget/home/heroSection/ui/letterAnimation/letter/Il'
import Jae from '@/widget/home/heroSection/ui/letterAnimation/letter/Jae'
import SubText from '@/widget/home/heroSection/ui/letterAnimation/letter/SubText'
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
