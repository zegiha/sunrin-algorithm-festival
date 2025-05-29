'use client'

import {Col} from '@/components/atom/flex'
import {Typo} from '@/components/atom/typo'
import {useEffect, useState} from 'react'
import style from './notFoundPage.module.css'

export default function() {
  const [second, setSecond] = useState<number>(0)

  useEffect(() => {
    if(second >= 5) {
      window.open('/')
    }
  }, [second]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((value) => value + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <Col
      className={style.container}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typo.headline width={'hug'} weight={'bold'}>
        페이지를 찾지 못했어요...
      </Typo.headline>
      <Typo.label width={'jh'} weight={'regular'} color={'contents-alternative'}>
        {5-second}초 후에 메인 페이지로 돌아갈게요
      </Typo.label>
    </Col>
  )
}