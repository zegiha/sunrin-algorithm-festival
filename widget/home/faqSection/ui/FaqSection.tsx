'use client'

import Badge from '@/components/atom/badge/ui/Badge'
import {Col} from '@/components/atom/flex'
import {Section} from '@/components/atom/section'
import {Typo} from '@/components/atom/typo'
import {Button} from '@/components/molecule/button'
import {Accordion} from "@/components/molecule/accordion";

const faqData: Array<{summary: string, detail: string}> = [
  // {summary: '신청은 누가 해야하나요?', detail: '신청은 팀을 대표하여 팀장님 한 분만 해주시면 됩니다.'},
  // {summary: '예선은 어떻게 진행되나요?', detail: ''},
  {summary: '예선이랑 본선은 어떤 차이가 있나요?', detail: '예선의 경우 각 팀의 팀원들이 푼 문제들의 점수를 합산하여 선발합니다.\n2인팀의 경우는 3인팀들의 합산된 점수의 평균으로 계산됩니다.'},
  {summary: '사전 설명회는 꼭 참여해야하나요?', detail: '네, 본선 전날에 있는 사전 설명회는 꼭 참여해야하며, 불참 시 불이익이 있을 수 있습니다.'},
  {summary: '본선 참여 시 기기 이용 방식에 특별한 점이 있을까요?', detail: '팀당 하나의 기기를 사용할 수 있으며, 두 대 이상의 컴퓨터(모니터, 키보드 포함) 사용할 수 없습니다.\n또한 화장실 이용할 때에는 운영진과 동행합니다.'},
  {summary: '수상시, 생활기록부 수상에 기재되나요?', detail: '생활기록부에 기재되는 수상은 없으며, 본선 참가 학생은 창의적체험활동에 활동 내용이 기재됩니다.'},
]

export default function FaqSection() {
  return (
    <Section.box id={'faqSection'} backgroundColor={'alternative'}>
      <Section.item>
        <Col gap={10} alignItems={'center'}>
          <Badge
            color={'grey'}
            contents={'FAQ'}
          />
          <Typo.headline weight={'semibold'} textAlign={'center'}>
            FAQ 외의 궁금한 점은 인스타그램으로 문의 주세요!
          </Typo.headline>
        </Col>
      </Section.item>
      <Section.item>
        <Col gap={16}>
          {faqData.map((v, i) => (
            <Accordion
              key={i}
              {...v}
            />
          ))}
          <Button.large
            type={'brand'}
            width={'fill'}
            label={'추가 문의하기'}
            onClick={() => {
              window.open('https://www.instagram.com/direct/t/17847269832176776', '_blank')
            }}
          />
        </Col>
      </Section.item>
    </Section.box>
  )
}
