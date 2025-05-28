import {Section} from "@/components/atom/section";
import {Col, Flex} from "@/components/atom/flex";
import Badge from "@/components/atom/badge/ui/Badge";
import {Typo} from "@/components/atom/typo";
import FirstArrow from '@/page/home/progressWaySection/ui/arrows/FirstArrow'
import SecondArrow from '@/page/home/progressWaySection/ui/arrows/SecondArrow'
import {FirstBox} from '@/page/home/progressWaySection/ui/boxes/FirstBox'
import LastBox from '@/page/home/progressWaySection/ui/boxes/LastBox'
import SecondBox from '@/page/home/progressWaySection/ui/boxes/SecondBox'
import style from './style.module.css';

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
        <Flex className={style.container} justifyContent={'center'} alignItems={'center'}>
          <FirstBox/>
          <FirstArrow/>
          <SecondBox/>
          <SecondArrow/>
          <LastBox/>
        </Flex>
      </Section.item>
    </Section.box>
  )
}
