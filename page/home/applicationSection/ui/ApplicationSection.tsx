'use client'

import Badge from '@/components/atom/badge/ui/Badge'
import {Col} from '@/components/atom/flex'
import {Section} from '@/components/atom/section'
import {Typo} from '@/components/atom/typo'
import {Button} from '@/components/molecule/button'

export default function ApplicationSection() {
  return (
    <Section.box backgroundColor={'default'}>
      <Section.item>
        <Col alignItems={'center'} gap={10}>
          <Badge
            color={'grey'}
            contents={'참가 신청'}
          />
          <Typo.headline weight={'semibold'} textAlign={'center'}>
            참가 신청은 아래 버튼을 눌러 지원해 주세요!
          </Typo.headline>
        </Col>
      </Section.item>
      <Section.item>
        <Col alignItems={'center'}>
          <Button.medium
            type={'grey'}
            leadIcon={'export_notes'}
            label={'예선 지원하기'}
            onClick={() => {window.open('https://docs.google.com/forms/d/e/1FAIpQLSf9o4-oZpgnSwWb87CEtV1ctfEqzphRW7KvcBVSpZZBXWAvtg/viewform?usp=sharing&ouid=110064195724320803661', '_blank')}}
          />
        </Col>
      </Section.item>
    </Section.box>
  )
}