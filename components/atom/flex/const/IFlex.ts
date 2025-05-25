import {CSSProperties, ReactNode, Ref, MouseEvent} from "react";
import {TWidth} from "@/shared/width";
import {IMotion} from "@/shared/motion";

export default interface IFlex {
  flexDirection?: 'row' | 'col'
  justifyContent?: 'start' | 'center' | 'end' | 'space-between'
  alignItems?: 'start' | 'center' | 'end'
  gap?: number

  ref?: Ref<HTMLDivElement>
  children?: ReactNode

  className?: string
  style?: CSSProperties
  width?: TWidth

  onClick?: (e: MouseEvent<HTMLDivElement>) => void | Promise<void>

  motion?: IMotion
}
