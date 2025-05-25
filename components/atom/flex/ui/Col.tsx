import IFlex from "@/components/atom/flex/const/IFlex";
import Flex from "@/components/atom/flex/ui/Flex";

export default function Col(
  props: Omit<IFlex, 'flexDirection'>
) {
  return <Flex
    {...props}
    flexDirection={'col'}
  />
}
