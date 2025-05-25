interface IDefaultAndAlternative {
  default: string
  alternative: string
}

interface IBrand extends Omit<IDefaultAndAlternative, 'alternative'>{
  translucent: string
}

interface IBackground {
  base: IDefaultAndAlternative
  elevated: IDefaultAndAlternative
}

interface IFill extends IDefaultAndAlternative{
  interaction: string
}

interface IContents extends IDefaultAndAlternative{
  disabled: string
  static: {
    white: string
    black: string
  }
}

interface ILine extends IDefaultAndAlternative {}

interface ITheme {
  brand: IBrand
  background: IBackground
  fill: IFill
  contents: IContents
  line: ILine
}

export type {
  IBrand,
  IBackground,
  IFill,
  IContents,
  ILine,
  ITheme
}
