import IBaseButton from "@/components/molecule/button/const/IBaseButton";
import {TTextColor} from "@/shared/design";

export default function getTextColor(type: IBaseButton['type']): TTextColor {
  switch (type) {
    case 'grey': return 'contents-default'
    case 'brand': return 'contents-static-white'
  }
}
