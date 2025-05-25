'use client'

import {motion} from "framer-motion";
import IFlex from "@/components/atom/flex/const/IFlex";
import {IMotion} from "@/shared/motion";
import {getStyle} from "@/components/atom/flex/helper/flexPropertiesHelper";

export default function MotionFlex(props: {motion: IMotion} & Omit<IFlex, 'motion'>) {
  const style = getStyle({...props, width: props.width ?? 'fill'})

  return <motion.div
    ref={props.ref}
    className={props.className}
    style={style}
    onClick={props.onClick}
    {...props.motion}
  >
    {props.children}
  </motion.div>
}
