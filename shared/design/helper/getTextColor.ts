import theme from "@/shared/design/const/theme";
import TTextColor from "@/shared/design/const/TTextColor";

export default function getTextColor(v: TTextColor) {
  switch (v) {
    case'brand-default': return theme.brand.default
    case'contents-default': return theme.contents.default
    case'contents-alternative': return theme.contents.alternative
    case'contents-disable': return theme.contents.disable
    case'contents-static-white': return theme.contents.static.white
    case'contents-static-black': return theme.contents.static.black
  }
}
