import { ITheme } from "@/shared/design/const/themeTypes";

const theme: ITheme = {
  brand: {
    default: "var(--brand-default)",          // #FF4D4D
    translucent: "var(--brand-translucent)"   // rgba(255, 77, 77, 0.17)
  },
  background: {
    base: {
      default: "var(--background-base-default)",        // #F7F8FA
      alternative: "var(--background-base-alternative)" // #ECEFF5
    },
    elevated: {
      default: "var(--background-elevated-default)",        // #F7F8FA
      alternative: "var(--background-elevated-alternative)" // #ECEFF5
    }
  },
  fill: {
    default: "var(--fill-default)",             // rgba(106, 109, 115, 0.04)
    alternative: "var(--fill-alternative)",     // rgba(106, 109, 115, 0.06)
    interaction: "var(--fill-interaction)"      // rgba(252, 253, 255, 0.9)
  },
  contents: {
    default: "var(--contents-default)",         // #18191A
    alternative: "var(--contents-alternative)", // #5D6066
    disabled: "var(--contents-disable)",        // #9BA0A8
    static: {
      white: "var(--contents-static-white)",    // #FCFDFF
      black: "var(--contents-static-black)"     // #18191A
    }
  },
  line: {
    default: "var(--line-default)",             // #D4DAE5
    alternative: "var(--line-alternative)"      // #ECEFF5
  }
}

export default theme;
