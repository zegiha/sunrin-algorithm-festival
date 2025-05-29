import {Col, Row} from '@/components/atom/flex'
import {Typo} from '@/components/atom/typo'
import BoxContents from '@/widget/home/progressWaySection/ui/boxes/BoxContents'
import classNames from 'classnames'
import style from './style.module.css'

export function FirstBox() {
  return (
    <>
      <FirstBoxDesktop/>
      <FirstBoxOthers/>
    </>
  )
}

function FirstBoxOthers() {
  return <div className={classNames(style.greyContainer, style.firstBoxOthers)}>
    <BoxContents
      color={'contents-default'}
      contents={'예선 지원'}
    />
    <BoxContents
      color={'contents-alternative'}
      contents={'25. 06. 01까지'}
    />
    <BoxContents
      color={'brand-default'}
      contents={'*팀장만 제출'}
    />
  </div>
}

function FirstBoxDesktop() {
  return (
    <div className={style.desktopContainer}>
      <Col gap={4}>
        <Typo.label weight={'bold'}>
          예선 지원
        </Typo.label>
        <Typo.label weight={'bold'} color={'brand-default'}>
          *25.06.01까지
        </Typo.label>
      </Col>
      <Col gap={16}>
        <Input contents={'이름'}/>
        <Input contents={'학번'}/>
        <Input contents={'전화번호'}/>
      </Col>
      <Row className={style.button} justifyContent={'center'}>
        <Typo.label weight={'bold'} color={'contents-static-white'} textAlign={'center'}>
          지원하기
        </Typo.label>
      </Row>
    </div>
  )
}

function Input({
                 contents
               }:{
  contents: string
}) {
  return (
    <Row className={style.inputContainer}>
      <Typo.label weight={'bold'} color={'contents-alternative'}>
        {contents}
      </Typo.label>
    </Row>
  )
}