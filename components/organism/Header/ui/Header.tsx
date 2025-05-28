'use client'

import {Col, Row} from '@/components/atom/flex'
import style from './style.module.css'
import Logo from '../../../../public/assets/logo.svg'
import {useEffect, useState} from "react";
import classNames from "classnames";
import {AnimatePresence} from "framer-motion";
import DesktopNavigations from "@/components/organism/Header/ui/navigation/DesktopNavigations";
import OthersNavigations from "@/components/organism/Header/ui/navigation/OthersNavigations";
import TextButtonContents from "@/components/organism/Header/ui/button/TextButtonContents";
import TranslucentButton from "@/components/organism/Header/ui/button/TranslucentButton";
import navigations from "@/components/organism/Header/const/navigations";

export default function Header() {
  const [isHeroSection, setIsHeroSection] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)

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
    <Col
      className={classNames(
        style.container,
        isOpen && style.onBackground,
      )}
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
          <Logo/>
          <DesktopNavigations isHeroSection={isHeroSection}/>
          <OthersNavigations setIsOpen={setIsOpen}/>
        </Row>
        <Modal isOpen={isOpen}/>
      </Col>
    </Col>
  )
}

function Modal({
  isOpen,
}: {
  isOpen: boolean
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
    <>
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
                onClick={() => {}}
              >
                <TextButtonContents contents={v.contents}/>
              </TranslucentButton>
            ))}
          </Col>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <div className={style.modalBackground}/>
        )}
      </AnimatePresence>
    </>
  )
}
