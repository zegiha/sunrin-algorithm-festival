import IBaseTypo from '@/components/atom/typo/const/IBaseTypo'

function addPx(value: number) {
  return `${value}px`
}

export function getFontSize(
  type: IBaseTypo['type'],
) {
  switch(type) {
    case 'Headline': return addPx(20)
    case 'Body': return addPx(16)
    case 'Label': return addPx(14)
    case 'Footnote': return addPx(12)
  }
}

export function getLineHeight(
  type: IBaseTypo['type'],
  isParagraph: IBaseTypo['isParagraph'],
) {
  if(isParagraph) return '170%'
  else switch(type) {
    case 'Headline': return addPx(32)
    case 'Body': return addPx(24)
    case 'Label': return addPx(20)
    case 'Footnote': return addPx(16)
  }
}

export function getLetterSpacing(
  type: IBaseTypo['type'],
  isParagraph: IBaseTypo['isParagraph'],
) {
  if(isParagraph) switch(type) {
    case 'Body': return '-0.4512px'
    case 'Label': return '-0.3948px'
  }
  else switch(type) {
    case 'Headline': return '-0.24px'
    case 'Body': return '0.0912px'
    case 'Label': return '0.203px'
    case 'Footnote': return '0.3024px'
  }
}

export function getFontWeight(weight: IBaseTypo['weight']) {
  switch(weight) {
    case 'regular': return 400
    case 'medium': return 500
    case 'semibold': return 600
    case 'bold': return 700
  }
}
