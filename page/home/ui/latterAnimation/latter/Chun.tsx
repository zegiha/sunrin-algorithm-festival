import WidthAnimation from "@/page/home/ui/latterAnimation/animationComponents/WidthAnimation";
import HeightAnimation from "@/page/home/ui/latterAnimation/animationComponents/HeightAnimation";

export default function Chun() {
  return (
    <svg width="75" height="95" viewBox="0 0 75 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <WidthAnimation id={'chun'} strokeCount={1}/>
        <WidthAnimation id={'chun'} strokeCount={2}/>
        <HeightAnimation id={'chun'} strokeCount={3}/>
        <HeightAnimation id={'chun'} strokeCount={4}/>
      </defs>
      <path
        clipPath='url(#chun-1)'
        d="M4.25562 22.1855V15.5449H70.2713V22.1855H4.25562Z"
        fill="#FCFDFF"
      />
      <path
        clipPath='url(#chun-2)'
        d="M68.4744 38.8262V45.4668H6.52124V38.8262H68.4744Z"
        fill="#FCFDFF"
      />
      <path
        clipPath='url(#chun-3)'
        d="M37.8494 52.498C34.3728 63.0058 26.0134 72.9668 6.59937 79.4512C5.89624 77.8105 3.94311 75.1543 2.61499 73.8262C23.5134 66.9512 30.3494 56.0918 32.4587 45.4668C32.8638 42.0235 33.3181 38.6249 33.3181 35.1543V22.1855H40.1931V35.1543C40.1931 35.1543 40.7142 47.0486 37.8494 52.498Z"
        fill="#FCFDFF"
      />
      <path
        clipPath='url(#chun-4)'
        d="M41.99 45.4668C46.8728 59.7246 56.4431 69.4902 72.3806 73.3574C70.8963 74.7636 69.0213 77.5762 68.0056 79.4512C52.8884 75.1543 43.5916 66.1308 37.8494 52.498C34.27 44 33.24 38.8262 33.24 38.8262C33.2791 37.5762 33.3181 36.3652 33.3181 35.1543V22.1855H40.1931V35.1543L40.115 38.8262L41.99 45.4668Z"
        fill="#FCFDFF"
      />
    </svg>
  )
}
