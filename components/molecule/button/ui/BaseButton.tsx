import IBaseButton from "@/components/molecule/button/const/IBaseButton";
import style from './style.module.css'
import {interaction} from "@/shared/interaction";
import cn from "classnames";
import {Icon} from "@/components/atom/icon";
import getTextColor from "@/components/molecule/button/helper/getTextColor";

export default function BaseButton({
  size,
  type,
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
      onClick={!disabled ? onClick : () => {}}
    >
      {leadIcon && <Icon
          iconKey={leadIcon}
          size={size === 'medium' ? 20 : 24}
          color={getTextColor(type)}
      />}
      {label && label}
    </button>
  )
}
