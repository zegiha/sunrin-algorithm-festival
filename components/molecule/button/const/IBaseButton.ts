import {MouseEventHandler} from "react";
import {TIconKey} from "@/components/atom/icon";

interface IBaseButton {
  size: 'medium' | 'large'
  type: 'grey' | 'brand'
  disabled?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  leadIcon?: TIconKey
  label?: string
}

export default IBaseButton
