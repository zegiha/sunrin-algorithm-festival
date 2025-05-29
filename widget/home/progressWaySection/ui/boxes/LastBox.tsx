import {Col} from '@/components/atom/flex'
import BoxContents from '@/widget/home/progressWaySection/ui/boxes/BoxContents'
import style from './style.module.css'

export default function LastBox() {
  return (
    <Col className={style.brandContainer} alignItems={'center'} gap={8}>
      <BoxContents
        color={'contents-static-white'}
        contents={'본선'}
      />
      <BoxContents
        color={'contents-static-white'}
        contents={'25. 07. 15 / 5시간 / 10문제 내외 / 팀전'}
      />
      <BoxContents
        color={'contents-static-white'}
        contents={'*굿즈 제공'}
      />
    </Col>
  )
}