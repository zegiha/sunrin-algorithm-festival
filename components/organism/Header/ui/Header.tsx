'use client'

import {Col, Row} from '@/components/atom/flex'
import Modal from '@/components/organism/Header/ui/modal/Modal'
import ModalBackground from '@/components/organism/Header/ui/modal/ModalBackground'
import style from './style.module.css'
import Logo from '../../../../public/assets/logo.svg'
import {useEffect, useState} from "react";
import classNames from "classnames";
import DesktopNavigations from "@/components/organism/Header/ui/navigation/DesktopNavigations";
import OthersNavigations from "@/components/organism/Header/ui/navigation/OthersNavigations";
import TranslucentButton from "@/components/organism/Header/ui/button/TranslucentButton";
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
        <ModalBackground isOpen={isOpen} setIsOpen={setIsOpen}/>
      </Col>
    </Col>
  )
}
