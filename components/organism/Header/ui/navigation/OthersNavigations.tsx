import {SetStateAction} from "react";
import style from "@/components/organism/Header/ui/style.module.css";
import {Icon} from "@/components/atom/icon";
import TranslucentButton from "@/components/organism/Header/ui/button/TranslucentButton";

export default function OthersNavigations({
  setIsOpen
}: {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}) {
  return (
    <>
      <div className={style.othersNavigationContainer}>
        <TranslucentButton onClick={() => {
          setIsOpen(p => !p)
        }}>
          <Icon
            iconKey={'menu'}
            size={24}
            color={'contents-static-white'}
          />
        </TranslucentButton>
      </div>
    </>
  )
}
