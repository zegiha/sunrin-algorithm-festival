import Desktop from '@/public/images/arrow/arrow2Desktop.svg'
import Others from '@/public/images/arrow/arrow2Others.svg'
import style from './style.module.css'

export default function() {
  return (
    <>
      <div className={style.arrow2DesktopContainer}>
        <Desktop/>
      </div>
      <div className={style.arrow2Others}>
        <Others/>
      </div>
    </>
  )
}