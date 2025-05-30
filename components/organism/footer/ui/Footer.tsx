import {Col, Flex} from "@/components/atom/flex";
import style from './style.module.css'
import SunrinLogo from '../../../../public/assets/sunrinLogo.svg'
import {Typo} from "@/components/atom/typo";

export default function Footer() {
  return (
    <Flex className={style.container} justifyContent={'center'}>
      <Flex className={style.wrapper} gap={24}>
        <Col gap={16}>
          <SunrinLogo/>
          <Typo.label weight={'regular'} color={'contents-alternative'} wordBreak={'keep-all'}>
            서울특별시 용산구 원효로97길 33-4 (청파동3가){'\n'}
            Tel. 070-4459-9047 | Fax. 704-0960{'\n'}
            {'\n'}
            © 2025. 선린인터넷고등학교 All Rights Reserved.{'\n'}
          </Typo.label>
        </Col>
        <Col gap={24}>
          <Col gap={8}>
            <Typo.body>천코대 운영진</Typo.body>
            <Typo.label weight={'regular'} color={'contents-alternative'} wordBreak={'keep-all'}>
              한지연 선생님, 김현호, 박찬규, 유채호, 이서율, 이정훈, 이주영, 류현규
            </Typo.label>
          </Col>
          <Col gap={8}>
            <Typo.body>웹사이트 제작</Typo.body>
            <Typo.label weight={'regular'} color={'contents-alternative'} wordBreak={'keep-all'}>
              이서율, 이주영
            </Typo.label>
          </Col>
        </Col>
      </Flex>
    </Flex>
  )
}
