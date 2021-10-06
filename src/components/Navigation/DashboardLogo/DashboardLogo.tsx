import React from 'react';
import { motion } from 'framer-motion';

const DashboardLogo: React.FC = () => (
  <motion.div>
    <motion.svg
      width="82"
      height="82"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <g filter="url(#filter0_dd)">
        <path
          d="M36 4H16C10.4772 4 6 8.47715 6 14V34C6 39.5228 10.4772 44 16 44H36C41.5228 44 46 39.5228 46 34V14C46 8.47715 41.5228 4 36 4Z"
          fill="white"
        />
      </g>
      <path
        d="M21.7807 32V26.5898H25.5381C27.4052 26.5898 28.8988 26.0535 30.0424 25.0041C31.1859 23.9314 31.746 22.5322 31.746 20.7833C31.746 19.0343 31.1859 17.6351 30.0424 16.5857C28.9221 15.5364 27.4285 15 25.5381 15H18V32H21.7807ZM25.0247 23.3717H21.7807V18.358H25.0247C26.8451 18.358 27.7552 19.1742 27.7552 20.8299C27.7552 22.5322 26.8451 23.3717 25.0247 23.3717Z"
        fill="#212529"
      />
      <path d="M34.1388 32V28.1756H30.6848V32H34.1388Z" fill="#1E8DE1" />
      <defs>
        <filter
          id="filter0_dd"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0295189 0 0 0 0 0.137798 0 0 0 0 0.187773 0 0 0 0.24 0" />
          <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0295189 0 0 0 0 0.137798 0 0 0 0 0.187773 0 0 0 0.16 0" />
          <feBlend mode="multiply" in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
      </defs>
    </motion.svg>
  </motion.div>
);

export default DashboardLogo;
