'use client'

import Badge from '@/components/atom/badge/ui/Badge'
import {Col} from '@/components/atom/flex'
import {Section} from '@/components/atom/section'
import {Typo} from '@/components/atom/typo'
import {Button} from '@/components/molecule/button'
import {Accordion} from "@/components/molecule/accordion";

const faqData: Array<{summary: string, detail: string}> = [
  {summary: '수상시, 생활기록부 수상에 기재되나요?', detail: '생활기록부에 기재되는 수상은 없으며, 본선 참가 학생은 창의적체험활동에 활동 내용이 기재됩니다.'},
]

export default function FaqSection() {
  return (
    <Section.box backgroundColor={'alternative'}>
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
            onClick={() => {window.open('')}}
          />
        </Col>
      </Section.item>
    </Section.box>
  )
}
