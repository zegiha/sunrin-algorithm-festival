
import {Col} from '@/components/atom/flex'
import LetterAnimation from '@/page/home/heroSection/ui/letterAnimation/LetterAnimation'
import MoreInfo from '@/page/home/heroSection/ui/moreInfoButton/MoreInfoButton'
import style from './style.module.css'

export default function() {
  return (
    <Col className={style.heroSection} width={'fill'} justifyContent={'center'} alignItems={'center'}>
      <LetterAnimation/>
      <MoreInfo/>
    </Col>
  )
}
