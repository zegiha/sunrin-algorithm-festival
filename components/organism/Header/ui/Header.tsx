'use client'

import {Col, Row} from '@/components/atom/flex'
import {createPortal} from 'react-dom'
import style from './style.module.css'
import Logo from '../../../../public/assets/logo.svg'
import {useEffect, useState} from "react";
import classNames from "classnames";
import {AnimatePresence} from "motion/react";
import DesktopNavigations from "@/components/organism/Header/ui/navigation/DesktopNavigations";
import OthersNavigations from "@/components/organism/Header/ui/navigation/OthersNavigations";
import TextButtonContents from "@/components/organism/Header/ui/button/TextButtonContents";
import TranslucentButton from "@/components/organism/Header/ui/button/TranslucentButton";
import navigations from "@/components/organism/Header/const/navigations";
import React from 'react'

export default function Header() {
  const [isHeroSection, setIsHeroSection] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      const scrolled = window.scrollY;
      setIsHeroSection(!(scrolled > viewportHeight-64))
    }

    const handleResize = () => {
      setIsOpen(false)
    }

    handleScroll()
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return (
    <Col
      className={classNames(
        style.container,
        isOpen && style.onBackground,
      )}
      alignItems={'center'}
    >
      <Col
        className={classNames(
          style.wrapper,
          !isHeroSection && style.onBackground
        )}
      >
        <Row
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <TranslucentButton onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'})
          }}>
            <Logo/>
          </TranslucentButton>
          <DesktopNavigations isHeroSection={isHeroSection}/>
          <OthersNavigations isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Row>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
        <ModalBackground isOpen={isOpen}/>
      </Col>
    </Col>
  )
}

function Modal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const variants = {
    close: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      marginBottom: 0,
    },
    open: {
      opacity: 1,
      height: 'auto',
      marginTop: 16,
      marginBottom: 16,
    }
  }

  return (
      <AnimatePresence>
        {isOpen && (
          <Col
            className={style.modalContainer}
            motion={{
              variants,
              initial: 'close',
              animate: 'open',
              exit: 'close'
            }}
          >
            {navigations.map((v, i) => (
              <TranslucentButton
                key={i}
                onClick={() => {
                  const targetScroll = document.getElementById(v.targetId)?.offsetTop ?? window.scrollY
                  const getTiming = (length: number) => {
                    if(length <= 300) return 300
                    if(length <= 1000) return 500
                    return 750
                  }
                  window.scrollTo({top: targetScroll, behavior: 'smooth'})
                  setTimeout(
                    () => {setIsOpen(false)},
                    getTiming(Math.abs(window.scrollY - targetScroll))
                  )
                }}
              >
                <TextButtonContents contents={v.contents}/>
              </TranslucentButton>
            ))}
          </Col>
        )}
      </AnimatePresence>
  )
}

function ModalBackground({
  isOpen
}: {
  isOpen: boolean
}) {
  return isOpen ? createPortal(
    <Row
      className={style.modalBackground}
      motion={{
        initial: {backgroundColor: 'rgba(24, 25, 26, 0)'},
        animate: {backgroundColor: 'rgba(24, 25, 26, 0.6)'},
        transition: {
          duration: 0.24,
          ease: 'easeInOut'
        }
      }}
    />,
    document.getElementById('modalBackground') as HTMLElement
  ):<></>
}
