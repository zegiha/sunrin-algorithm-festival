import {Col} from '@/components/atom/flex'
import BoxContents from '@/page/home/progressWaySection/ui/boxes/BoxContents'
import style from './style.module.css'

export default function SecondBox() {
  return (
    <Col className={style.greyContainer} alignItems={'center'} gap={8}>
      <BoxContents
        color={'contents-default'}
        contents={'예선'}
      />
      <BoxContents
        color={'contents-alternative'}
        contents={'25. 06. 12 / 2시간 / 5문제 내외 / 개인전'}
      />
      <BoxContents
        color={'brand-default'}
        contents={'*팀 합산 점수 높은 순으로 선발'}
      />
    </Col>
  )
}