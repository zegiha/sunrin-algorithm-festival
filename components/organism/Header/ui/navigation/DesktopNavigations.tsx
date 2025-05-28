import style from "@/components/organism/Header/ui/style.module.css";
import navigations from "@/components/organism/Header/const/navigations";
import TextButtonContents from "@/components/organism/Header/ui/button/TextButtonContents";
import TranslucentButton from "@/components/organism/Header/ui/button/TranslucentButton";

export default function DesktopNavigations({
  isHeroSection
}: {
  isHeroSection: boolean
}) {
  return (
    <div className={style.desktopNavigationContainer}>
      {navigations.map((v, i) => (
        <TranslucentButton
          key={i}
          onClick={() => {
          }}
        >
          <TextButtonContents
            contents={v.contents}
            isHeroSection={isHeroSection}
          />
        </TranslucentButton>
      ))}
    </div>
  )
}
