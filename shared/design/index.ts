import theme from "@/shared/design/const/theme";
import {
  ITheme,
  IBrand,
  IBackground,
  IFill,
  IContents,
  ILine,
} from "@/shared/design/const/themeTypes";

import getTextColor from "@/shared/design/helper/getTextColor";
import TTextColor from "@/shared/design/const/TTextColor";

import textColor from '@/shared/design/ui/textColor.module.css'

export {
  theme,
  getTextColor,
  textColor,
}

export type {
  ITheme,
  IBrand,
  IBackground,
  IFill,
  IContents,
  ILine,

  TTextColor,
}
