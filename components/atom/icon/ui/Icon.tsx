import IIcon from "@/components/atom/icon/const/IIcon";
import {getTextColor} from "@/shared/design";

export default function Icon({
  iconKey,
  size,
  color='contents-default',
  fill
}: IIcon) {
  return <div
    className={'material-symbols-rounded'}
    style={{
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}`,
      width: size,
      height: size,
      fontSize: `${size}px`,
      color: getTextColor(color),
      transitionDuration: '0.16s',
      userSelect: 'none'
    }}
  >
    {iconKey}
  </div>
}
