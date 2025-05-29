'use client'

import IIcon from '@/components/atom/icon/const/IIcon'
import {motion} from 'motion/react'
import {CSSProperties} from 'react'

export default function MotionedIcon({
  iconKey,
  motionProps,
  style
}: {
  iconKey: IIcon['iconKey']
  motionProps: IIcon['motion']
  style: CSSProperties
}) {
  return <motion.div
      className={'material-symbols-rounded'}
      style={style}
      {...motionProps}
    >
      {iconKey}
    </motion.div>
}