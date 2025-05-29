import {Col} from '@/components/atom/flex'
import navigations from '@/components/organism/Header/const/navigations'
import TextButtonContents from '@/components/organism/Header/ui/button/TextButtonContents'
import TranslucentButton from '@/components/organism/Header/ui/button/TranslucentButton'
import {AnimatePresence} from 'motion/react'
import style from './style.module.css'

export default function Modal({
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