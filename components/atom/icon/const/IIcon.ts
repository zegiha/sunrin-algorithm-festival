import {TTextColor} from "@/shared/design";
import {TIconKey} from "@/components/atom/icon/const/iconKey";
import {IMotion} from '@/shared/motion'


interface IIcon {
  iconKey: TIconKey
  size?: number
  color?: TTextColor
  fill?: boolean
  motion?: IMotion
}

export default IIcon
