'use client'

import {Row} from '@/components/atom/flex'
import style from './style.module.css'
import Logo from '../../../../public/assets/logo.svg'
import {ReactNode, useEffect, useState} from "react";
import {Typo} from "@/components/atom/typo";
import classNames from "classnames";
import {interaction} from "@/shared/interaction";

const navList = [
  {contents: '대회 안내'},
  {contents: '참가 신청'},
  {contents: 'FAQ'},
]

export default function Header() {
  const [isHeroSection, setIsHeroSection] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      const scrolled = window.scrollY;
      setIsHeroSection(!(scrolled > viewportHeight-64))
    }


    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <Row className={style.container} justifyContent={'center'}>
      <Row
        className={classNames(
          style.wrapper,
          !isHeroSection && style.onBackground
        )}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Logo/>
        <Row width={'hug'} gap={24}>
          {navList.map((v, i) => (
            <TranslucentButton
              key={i}
              onClick={() => {}}
            >
              <TextButtonContents
                contents={v.contents}
                isHeroSection={isHeroSection}
              />
            </TranslucentButton>
          ))}
        </Row>
      </Row>
    </Row>
  )
}

function TextButtonContents({
  contents,
  isHeroSection
}: {
  contents: string
  isHeroSection?: boolean
}) {
  return (
    <Typo.label
      color={isHeroSection ? 'contents-alternative' : 'contents-static-white'}
      weight={'regular'}
    >
      {contents}
    </Typo.label>
  )
}

function TranslucentButton({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => void
}) {
  return (
    <button
      className={classNames(
        style.translucentButtonContainer,
        interaction.interaction
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
