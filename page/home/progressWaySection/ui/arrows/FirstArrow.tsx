import Desktop from '@/public/images/arrow/arrow1Desktop.svg'
import Others from '@/public/images/arrow/arrow1Others.svg'
import style from './style.module.css'

export default function FirstArrow() {
  return (
    <>
      <div className={style.arrow1DesktopContainer}>
        <Desktop/>
      </div>
      <div className={style.arrow1Others}>
        <Others/>
      </div>
    </>
  )
}