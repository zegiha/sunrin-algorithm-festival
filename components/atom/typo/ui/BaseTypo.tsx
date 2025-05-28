import IBaseTypo from '@/components/atom/typo/const/IBaseTypo'
import {
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight
} from '@/components/atom/typo/helper/getFontStyle'
import {textColor} from '@/shared/design'
import {getWidth} from '@/shared/width'
import {createElement} from "react";
import classNames from "classnames";

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
      className: classNames(
        textColor[color],
        className
      ),
      style: {
        fontFamily: 'PretendardJP, PretendardJP Fallback, sans-serif',
        fontSize: getFontSize(type),
        lineHeight: getLineHeight(type, isParagraph),
        letterSpacing: getLetterSpacing(type, isParagraph),
        fontWeight: getFontWeight(weight),
        width: getWidth(width),
        whiteSpace: 'pre-wrap',
        transition: 'all 0.24s ease-in-out',
        wordBreak,
        textAlign,
      }
    },
    children
  )
}
