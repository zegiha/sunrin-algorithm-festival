import {TWidth} from "@/shared/width";
import typoType from "@/components/atom/typo/const/typoType";
import typoWeight from "@/components/atom/typo/const/typoWeight";

export default interface IBaseTypo {
  type: typoType
  weight?: typoWeight
  isParagraph?: boolean
  className: string
  width?: TWidth
  children: string
}
