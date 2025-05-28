import {ReactNode} from "react";
import classNames from "classnames";
import style from "@/components/organism/Header/ui/style.module.css";
import {interaction} from "@/shared/interaction";

export default function TranslucentButton({
  children,
  onClick,
}: {
children: ReactNode
  onClick: () => void
}) {
  return (
    <button
      className={classNames(
        style.translucentButtonContainer,
        interaction.interaction
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
