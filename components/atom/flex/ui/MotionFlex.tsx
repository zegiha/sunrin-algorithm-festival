'use client'

import IFlex from '@/components/atom/flex/const/IFlex'
import {getStyle} from '@/components/atom/flex/helper/flexPropertiesHelper'
import {motion} from 'motion/react'

export default function(props: IFlex) {

  const style = getStyle({...props, width: props.width ?? 'fill'})

  return <motion.div
    ref={props.ref}
    id={props.id}
    className={props.className}
    style={style}
    onClick={props.onClick}
    {...props.motion}
  >
    {props.children}
  </motion.div>
}