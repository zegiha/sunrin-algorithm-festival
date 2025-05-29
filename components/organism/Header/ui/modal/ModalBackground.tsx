'use client'

import {Row} from '@/components/atom/flex'
import {createPortal} from 'react-dom'
import style from './style.module.css'

export default function ModalBackground({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return isOpen ? createPortal(
    <Row
      className={style.modalBackground}
      onClick={() => {setIsOpen(false)}}
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