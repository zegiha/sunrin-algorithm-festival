import IIcon from "@/components/atom/icon/const/IIcon";
import {getTextColor} from "@/shared/design";
import {CSSProperties} from 'react'
import {motion} from 'framer-motion'

export default function Icon({
  iconKey,
  size,
  color='contents-default',
  fill,
  motion: motionProps
}: IIcon) {
  const style: CSSProperties = {
    fontVariationSettings: `'FILL' ${fill ? 1 : 0}`,
    width: size,
    height: size,
    fontSize: `${size}px`,
    color: getTextColor(color),
    transitionDuration: '0.16s',
    userSelect: 'none'
  }

  if(motionProps === undefined)
    return <div
      className={'material-symbols-rounded'}
      style={style}
    >
      {iconKey}
    </div>
  else
    return <motion.div
      className={'material-symbols-rounded'}
      style={style}
      {...motionProps}
    >
      {iconKey}
    </motion.div>
}
