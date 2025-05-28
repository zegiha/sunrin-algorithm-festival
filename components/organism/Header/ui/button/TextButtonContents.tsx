import {Typo} from "@/components/atom/typo";

export default function TextButtonContents({
  contents,
  isHeroSection
}: {
  contents: string
  isHeroSection?: boolean
}) {
  return (
    <Typo.label
      color={isHeroSection ? 'contents-alternative' : 'contents-static-white'}
      weight={'regular'}
    >
      {contents}
    </Typo.label>
  )
}
