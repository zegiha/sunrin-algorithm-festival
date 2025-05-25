import IFlex from "@/components/atom/flex/const/IFlex";
import Flex from "@/components/atom/flex/ui/Flex";

export default function Row(
  props: Omit<IFlex, 'flexDirection'>
) {
  return <Flex
    {...props}
    flexDirection={'row'}
  />
}
