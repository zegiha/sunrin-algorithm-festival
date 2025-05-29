'use client'

import {Col} from '@/components/atom/flex'
import LetterAnimation from '@/widget/home/heroSection/ui/letterAnimation/LetterAnimation'
import MoreInfo from '@/widget/home/heroSection/ui/moreInfoButton/MoreInfoButton'
import classNames from 'classnames'
import {useEffect, useState} from 'react'
import style from './style.module.css'

export default function() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)
  const imgUrl = '/images/heroImage.webp'

  useEffect(() => {
    const img = new Image()
    img.src = imgUrl
    img.onload = () => {
      setIsLoaded(true)
    }
  }, [])

  return (
    <Col className={style.heroSectionWrapper}>
      <Col
        className={classNames(
          style.heroSection,
          isLoaded && style.bgReady
        )}
        width={'fill'}
        justifyContent={'center'}
        alignItems={'center'}
        style={{
          backgroundImage: isLoaded ? `url(${imgUrl})` : 'none',
        }}
      >
        {isLoaded && (
          <>
            <LetterAnimation/>
            <MoreInfo/>
          </>
        )}
      </Col>
    </Col>
  )
}
