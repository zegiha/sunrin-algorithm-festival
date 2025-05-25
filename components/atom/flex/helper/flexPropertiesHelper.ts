import {Property} from 'csstype'
import IFlex from "@/components/atom/flex/const/IFlex";
import {getWidth, TWidth} from "@/shared/width";
import {CSSProperties} from "react";

const getFlexDirection = (flexDirection: IFlex['flexDirection']): Property.FlexDirection | undefined => {
  switch (flexDirection) {
    case 'row': return 'row'
    case 'col': return 'column'
    default: return undefined
  }
}

const getSort = (sort: IFlex['justifyContent'] | IFlex['alignItems']):
  Property.JustifyContent | Property.AlignItems | undefined => {
  switch (sort) {
    case 'start': return 'flex-start'
    case 'center': return 'center'
    case 'end': return 'flex-end'
    case 'space-between': return 'space-between'
    default: return undefined
  }
}

const getStyle = ({
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  width,
  onClick,
  style,
}:
{width: TWidth} &
Omit<IFlex,
  'width' |
  'motion' |
  'className' |
  'children' |
  'ref'
>): CSSProperties => {
  return {
    display: 'flex',
    flexDirection: getFlexDirection(flexDirection),
    justifyContent: getSort(justifyContent),
    alignItems: getSort(alignItems),
    gap: gap,
    width: getWidth(width),
    cursor: onClick ? 'pointer' : undefined,
    ...style,
  }
}

export {
  getStyle,
}
