import IFlex from "@/components/atom/flex/const/IFlex";
import {getStyle} from "@/components/atom/flex/helper/flexPropertiesHelper";
import MotionFlex from '@/components/atom/flex/ui/MotionFlex'

export default function Flex(props: IFlex) {
  const style = getStyle({...props, width: props.width ?? 'fill'})

  if(props.motion === undefined)
    return <div
      ref={props.ref}
      id={props.id}
      className={props.className}
      style={style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  else return <MotionFlex {...props}/>
}
