import {TWidth} from "@/shared/width";
import {CSSProperties} from "react";

export default function getWidth(width: TWidth): CSSProperties['width'] {
  switch(width) {
    case 'fill': return '100%'
    case 'hug': return 'fit-content'
    default: return width
  }
}
