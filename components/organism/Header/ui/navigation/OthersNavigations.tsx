'use client'

import {Icon} from "@/components/atom/icon";
import TranslucentButton from "@/components/organism/Header/ui/button/TranslucentButton";
import style from '../style.module.css'
import React from 'react'

export default function OthersNavigations({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <>
      <div className={style.othersNavigationContainer}>
        {isOpen ? (
          <TranslucentButton onClick={() => {
            setIsOpen(p => !p)
          }}>
            <Icon
              iconKey={'close'}
              size={24}
              color={'contents-static-white'}
            />
          </TranslucentButton>
        ):(
          <TranslucentButton onClick={() => {
            setIsOpen(p => !p)
          }}>
            <Icon
              iconKey={'menu'}
              size={24}
              color={'contents-static-white'}
            />
          </TranslucentButton>
        )}
      </div>
    </>
  )
}
