import {TTextColor} from '@/shared/design'
import {TWidth} from "@/shared/width";
import typoType from "@/components/atom/typo/const/typoType";
import typoWeight from "@/components/atom/typo/const/typoWeight";
import {ReactNode} from 'react'

export default interface IBaseTypo {
  type: typoType
  weight?: typoWeight
  isParagraph?: boolean
  color?: TTextColor
  className?: string
  width?: TWidth
  textAlign?: 'start' | 'center',
  whiteSpace?: 'pre-wrap' | 'nowrap',
  wordBreak?: 'keep-all' | 'word-break'
  children: ReactNode
}
