
'use client'

import { motion } from "framer-motion";

export default function Test() {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg width="67" height="7" viewBox="0 0 67 7" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="reveal">
            <motion.rect
              initial={{ width: 0 }}
              animate={{ width: 67 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              height="7"
              x="0"
              y="0"
            />
          </clipPath>
        </defs>

        <path
          d="M0.640625 6.64062V0H66.6563V6.64062H0.640625Z"
          fill="#FCFDFF"
          clipPath="url(#reveal)"
        />
      </svg>
    </div>
  )
}
