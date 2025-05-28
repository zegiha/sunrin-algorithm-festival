import Badge from '@/components/atom/badge/ui/Badge'
import {Col} from '@/components/atom/flex'
import {Section} from '@/components/atom/section'
import {Typo} from '@/components/atom/typo'
import {Button} from '@/components/molecule/button'

export default function FaqSection() {
  return (
    <Section.box backgroundColor={'alternative'}>
      <Section.item>
        <Col gap={10}>
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
          <Button.large
            type={'brand'}
            label={'추가 문의하기'}
            onClick={() => {window.open('')}}
          />
        </Col>
      </Section.item>
    </Section.box>
  )
}