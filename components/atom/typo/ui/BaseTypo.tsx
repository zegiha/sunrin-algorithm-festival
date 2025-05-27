import IBaseTypo from '@/components/atom/typo/const/IBaseTypo'
import {
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight
} from '@/components/atom/typo/helper/getFontStyle'
import {getTextColor} from '@/shared/design'
import {getWidth} from '@/shared/width'
import {createElement} from "react";

export default function BaseTypo({
  type,
  weight='medium',
  isParagraph,
  color='contents-default',
  className,
  width='fill',
  children,
  textAlign='start',
  wordBreak,
}: IBaseTypo) {
  return createElement(
    type === 'Headline' ?
      'h3' : 'p',
    {
      className,
      style: {
        fontFamily: 'PretendardJP, PretendardJP Fallback, sans-serif',
        fontSize: getFontSize(type),
        lineHeight: getLineHeight(type, isParagraph),
        letterSpacing: getLetterSpacing(type, isParagraph),
        fontWeight: getFontWeight(weight),
        color: getTextColor(color),
        width: getWidth(width),
        whiteSpace: 'pre-wrap',
        wordBreak,
        textAlign,
      }
    },
    children
  )
}
