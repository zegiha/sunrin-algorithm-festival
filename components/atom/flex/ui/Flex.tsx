import IFlex from "@/components/atom/flex/const/IFlex";
import {getStyle} from "@/components/atom/flex/helper/flexPropertiesHelper";
import {motion} from 'framer-motion'

export default function Flex(props: IFlex) {
  const style = getStyle({...props, width: props.width ?? 'fill'})

  if(props.motion === undefined)
    return <div
      ref={props.ref}
      className={props.className}
      style={style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  else
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
