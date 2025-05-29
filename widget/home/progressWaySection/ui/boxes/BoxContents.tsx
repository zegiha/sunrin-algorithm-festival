import {TTextColor} from '@/shared/design'
import {Typo} from '@/components/atom/typo'

export default function BoxContents({
  color,
  contents
}: {
  color: TTextColor
  contents: string
}) {
  return <Typo.label
    width={'hug'}
    weight={'bold'}
    whiteSpace={'nowrap'}
    color={color}
  >{contents}</Typo.label>
}