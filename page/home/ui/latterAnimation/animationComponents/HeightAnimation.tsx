import {motion} from "framer-motion";

export default function HeightAnimation({
                           id,
                           strokeCount,
                         }: {
  id: string
  strokeCount: number
}) {
  return (
    <clipPath id={`${id}-${strokeCount}`}>
      <motion.rect
        initial={{height: 0, opacity: 0}}
        animate={{height: 95, opacity: 1}}
        transition={{duration: 0.64 + (strokeCount > 7 ? 0.2 : 0.32) * (strokeCount-1), ease: "easeInOut"}}
        width="75"
        x="0"
        y="0"
      />
    </clipPath>
  )
}
