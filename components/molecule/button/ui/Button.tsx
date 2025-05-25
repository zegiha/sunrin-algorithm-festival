import IBaseButton from "@/components/molecule/button/const/IBaseButton";
import BaseButton from "@/components/molecule/button/ui/BaseButton";

function createButton(size: IBaseButton['size']) {
  return (props: Omit<IBaseButton, 'size'>) => <BaseButton
    size={size}
    {...props}
  />
}

const Button = {
  large: createButton('large'),
  medium: createButton('medium')
}

export default Button
