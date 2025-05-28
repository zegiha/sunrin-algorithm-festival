import {Typo} from '@/components/atom/typo'
import IBaseButton from "@/components/molecule/button/const/IBaseButton";
import {getWidth} from '@/shared/width'
import style from './style.module.css'
import {interaction} from "@/shared/interaction";
import cn from "classnames";
import {Icon} from "@/components/atom/icon";
import getTextColor from "@/components/molecule/button/helper/getTextColor";

export default function BaseButton({
  size,
  type,
  width='hug',
  disabled,
  onClick,
  leadIcon,
  label,
}: IBaseButton) {
  return (
    <button
      className={cn(
        style[size],
        style[type],
        !disabled ?
          interaction.interaction:
          interaction.disabled
      )}
      style={{width: getWidth(width)}}
      onClick={!disabled ? onClick : () => {}}
    >
      {leadIcon && <Icon
          iconKey={leadIcon}
          fill
          size={size === 'medium' ? 20 : 24}
          color={getTextColor(type)}
      />}
      {label && (
        size === 'large' ? (
          <Typo.body color={getTextColor(type)} textAlign={'center'}>
            {label}
          </Typo.body>
        ):(
          <Typo.label color={getTextColor(type)} textAlign={'center'}>
            {label}
          </Typo.label>
        )
      )}
    </button>
  )
}
