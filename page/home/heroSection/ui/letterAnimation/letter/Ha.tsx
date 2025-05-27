import WidthAnimation from "@/page/home/heroSection/ui/letterAnimation/animationComponents/WidthAnimation";
import HeightAnimation from "@/page/home/heroSection/ui/letterAnimation/animationComponents/HeightAnimation";

export default function Ha() {
  return (
    <svg width="75" height="95" viewBox="0 0 75 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <WidthAnimation id={'ha'} strokeCount={1}/>
        <HeightAnimation id={'ha'} strokeCount={2}/>
        <WidthAnimation id={'ha'} strokeCount={3}/>
      </defs>
      <path
        clipPath="url(#ha-1)"
        d="M71.0156 15.5625V21.9688H4.0625V15.5625H71.0156Z"
        fill="#FCFDFF"
      />
      <path
        clipPath="url(#ha-2)"
        d="M39.4531 21.9688V79.2344H32.5781V21.9688H39.4531Z"
        fill="#FCFDFF"
      />
      <path
        clipPath="url(#ha-3)"
        d="M36.5 38.5L40.625 33.7656C49.375 38.0625 61.25 44.7031 67.1875 49.3125L62.5781 55.1719C57.6172 51.1094 47.8516 45.0547 39.4531 40.4062L36.5 38.5Z"
        fill="#FCFDFF"
      />
    </svg>
  )
}
