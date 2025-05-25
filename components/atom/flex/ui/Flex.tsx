import IFlex from "@/components/atom/flex/const/IFlex";
import MotionFlex from "@/components/atom/flex/ui/MotionFlex";
import {getStyle} from "@/components/atom/flex/helper/flexPropertiesHelper";

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
    return <MotionFlex
      {...props}
      motion={props.motion}
    />
}
