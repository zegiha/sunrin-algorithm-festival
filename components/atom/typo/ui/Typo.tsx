import IBaseTypo from '@/components/atom/typo/const/IBaseTypo'
import BaseTypo from '@/components/atom/typo/ui/BaseTypo'

function createTypo(type: IBaseTypo['type']) {
  return (props: Omit<IBaseTypo, 'type'>) => <BaseTypo
    type={type}
    {...props}
  />
}

const Typo = {
  headline: createTypo('Headline'),
  body: createTypo('Body'),
  label: createTypo('Label'),
  footnote: createTypo('Footnote'),
}

export default Typo
