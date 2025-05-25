import {motion} from "framer-motion";

export default function WidthAnimation({
                          id,
                          strokeCount,
                        }: {
  id: string
  strokeCount: number
}) {
  return (
    <clipPath id={`${id}-${strokeCount}`}>
      <motion.rect
        initial={{width: 0, opacity: 0}}
        animate={{width: 75, opacity: 1}}
        transition={{duration: 0.64 + (strokeCount > 7 ? 0.16 : 0.32) * (strokeCount-1), ease: "easeInOut"}}
        height="95"
        x="0"
        y="0"
      />
    </clipPath>
  )
}
