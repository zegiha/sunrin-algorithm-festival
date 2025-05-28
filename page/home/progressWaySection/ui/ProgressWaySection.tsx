import {Section} from "@/components/atom/section";
import {Col, Flex, Row} from "@/components/atom/flex";
import Badge from "@/components/atom/badge/ui/Badge";
import {Typo} from "@/components/atom/typo";
import style from './style.module.css';
import Arrow1 from '../../../../public/images/arrow1.svg'

export default function ProgressWaySection() {
  return (
    <Section.box backgroundColor={'alternative'}>
      <Section.item>
        <Col width={'fill'} gap={10} alignItems={'center'}>
          <Badge
            color={'grey'}
            contents={'대회 안내'}
          />
          <Typo.headline
            weight={'semibold'}
            textAlign={'center'}
            wordBreak={'keep-all'}
          >
            예선부터 본선은 이렇게 진행됩니다!
          </Typo.headline>
        </Col>
      </Section.item>
      <Section.item>
        <Desktop/>
      </Section.item>
    </Section.box>
  )
}

function Desktop() {
  return (
    <Flex>
      <Col className={style.form} width={274} gap={24}>
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
        <Button/>
      </Col>
      <Row className={style.arrow1Container} alignItems={'end'}>
        <Arrow1/>
      </Row>
      <Col className={style.greyContainer} justifyContent={'center'} gap={8}>
        <Typo.label width={'hug'} weight={'bold'}>
          예선
        </Typo.label>
        <Typo.label width={'hug'} weight={'bold'} color={'contents-alternative'}>
          25. 06. 12 / 2시간 / 5문제 내외 / 개인전
        </Typo.label>
        <Typo.label width={'hug'} weight={'bold'} color={'brand-default'}>
          *팀 합산 점수 높은 순으로 선발
        </Typo.label>
      </Col>
      <Row className={style.arrow1Container} alignItems={'end'}>
        <Arrow1/>
      </Row>
      <Col className={style.brandContainer} justifyContent={'center'} gap={8}>

      </Col>
    </Flex>
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

function Button() {
  return (
    <Row className={style.button} justifyContent={'center'}>
      <Typo.label weight={'bold'} color={'contents-static-white'} textAlign={'center'}>
        지원하기
      </Typo.label>
    </Row>
  )
}
