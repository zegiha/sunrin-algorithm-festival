import {ReactNode} from "react";
import classNames from "classnames";
import style from "./style.module.css";
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
      onClick={e => {
        e.stopPropagation()
        onClick()
      }}
    >
      {children}
    </button>
  )
}
