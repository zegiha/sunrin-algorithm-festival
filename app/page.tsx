'use client'

import Row from "@/components/atom/flex/ui/Row";
import Col from "@/components/atom/flex/ui/Col";

export default function Home() {
  return (
    <div>
      <Row
        width={'fill'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={24}
        style={{backgroundColor: 'red', height: 400}}
      >
        <Col width={'hug'} gap={12}>
          <Row
            width={64}
            style={{height: 64, backgroundColor: 'blue'}}
            motion={{
              initial: {
                opacity: 0,
                y: -100,
              },
              animate: {
                opacity: 1,
                y: 0,
              },
              transition: {
                duration: 0.64,
              }
            }}
          />
          <Row
            width={64}
            style={{height: 64, backgroundColor: 'green'}}
            motion={{
              initial: {
                opacity: 0,
                x: -100,
              },
              animate: {
                opacity: 1,
                x: 0,
              },
              transition: {
                duration: 0.64,
              }
            }}
          >
            <Row width={'fill'} style={{height: '50%', backgroundColor: 'yellow'}} onClick={() => alert('우예 찾았노 ㅋㅋ')}>

            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
