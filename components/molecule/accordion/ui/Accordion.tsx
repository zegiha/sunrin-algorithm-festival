'use client'

import {Col, Row} from "@/components/atom/flex";
import {Typo} from "@/components/atom/typo";
import {Icon} from "@/components/atom/icon";
import {AnimatePresence} from "framer-motion";
import style from './style.module.css'
import {useState} from "react";
import classNames from "classnames";
import {interaction} from "@/shared/interaction";

export default function Accordion({
  summary,
  detail
}: {
  summary: string,
  detail: string
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Col className={classNames(
      style.container,
      interaction.interactionWithoutActive,
    )} onClick={() => setIsOpen(p => !p)}>
      <Summary
        isOpen={isOpen}
        contents={summary}
      />
      <Detail
        isOpen={isOpen}
        contents={detail}
      />
    </Col>
  )
}

function Summary({
  contents,
  isOpen,
}: {
  contents: string
  isOpen: boolean
}) {
  const variants = {
    close: {rotate: 0},
    open: {rotate: 180}
  }

  return (
    <Row className={style.summary} gap={10}>
      <Typo.body>
        {contents}
      </Typo.body>
      <Icon
        iconKey={'keyboard_arrow_down'}
        color={'contents-alternative'}
        size={24}
        motion={{
          variants,
          initial: 'close',
          animate: isOpen ? 'open' : 'close',
          transition: {
            duration: 0.24,
            ease: 'linear'
          }
        }}
      />
    </Row>
  )
}

function Detail({
  contents,
  isOpen
}: {
  contents: string
  isOpen: boolean
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Row
          className={style.detail}
          motion={{
            variants: {
              close: {height: 0, marginBottom: 0, opacity: 0},
              open: {height: 'auto', marginBottom: 14, opacity: 1}
            },
            initial: 'close',
            animate: 'open',
            exit: 'close',
            transition: {
              duration: 0.24,
              ease: 'easeInOut'
            }
          }}
        >
          <Typo.label color={'contents-alternative'} isParagraph>
            {contents}
          </Typo.label>
        </Row>
      )}
    </AnimatePresence>
  )
}
