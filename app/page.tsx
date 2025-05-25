'use client'

import Col from "@/components/atom/flex/ui/Col";
import {Button} from "@/components/molecule/button";

export default function Home() {
  return (
    <Col
      width={'fill'}
      style={{height: '100vh'}}
      justifyContent={'center'}
      alignItems={'center'}
      gap={8}
    >
      <Button.large
        type={'brand'}
        onClick={() => {}}
      />
    </Col>
  );
}
