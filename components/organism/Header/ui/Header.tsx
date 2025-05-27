import {Row} from '@/components/atom/flex'
import style from './style.module.css'

export default function Header() {
  return (
    <Row className={style.container} justifyContent={'center'}>
      <Row
        className={style.wrapper}
        width={'fill'}
        justifyContent={'space-between'}
      >
      </Row>
    </Row>
  )
}