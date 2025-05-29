import Badge from '@/components/atom/badge/ui/Badge'
import {Col, Row} from '@/components/atom/flex'
import {Section} from '@/components/atom/section'
import {Typo} from '@/components/atom/typo'
import Image from 'next/image'
import style from './style.module.css'
import img1 from '@/public/images/pastCompatition/1stBackground.webp'
import Text1 from '../../../../public/images/pastCompatition/1stText.svg'
import img2 from '@/public/images/pastCompatition/3rdBackground.webp'
import Text2 from '../../../../public/images/pastCompatition/3rdText.svg'
import img3 from '@/public/images/pastCompatition/7thBackground.webp'
import Text3 from '../../../../public/images/pastCompatition/7thText.svg'
import img4 from '@/public/images/pastCompatition/8thBackground.webp'
import Text4 from '../../../../public/images/pastCompatition/8thText.svg'
import cn from 'classnames'

const images = [
  {image: img1, label: Text1},
  {image: img2, label: Text2},
  {image: img3, label: Text3},
  {image: img4, label: Text4},
]

export default function GuideSection() {
  return (
    <Section.box id={'guideSection'} backgroundColor={'default'}>
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
            천하제일코딩대회는 올해로 9회째를 맞이하는,{'\n'}
            선린인터넷고등학교의 대표 알고리즘 페스티벌입니다.
          </Typo.headline>
        </Col>
      </Section.item>
      <Row width={'fill'} className={style.imageGroupContainer}>
        <Row
          width={'hug'}
          className={cn(style.imageGroupWrapper, style.rolling1)}
        >
          {images.map((v, i) => (
            <div className={style.imageWrapper} key={i}>
              <Image
                src={v.image}
                alt={'image'}
                fill
                style={{zIndex: 1}}
              />
              <div className={style.imageText}>
                <v.label/>
              </div>
            </div>
          ))}
        </Row>
        <Row
          width={'hug'}
          className={cn(style.imageGroupWrapper, style.rolling2)}
        >
          {images.map((v, i) => (
            <div className={style.imageWrapper} key={i}>
              <Image
                src={v.image}
                alt={'image'}
                fill
                style={{zIndex: 1}}
              />
              <div className={style.imageText}>
                <v.label/>
              </div>
            </div>
          ))}
        </Row>
      </Row>
    </Section.box>
  )
}
