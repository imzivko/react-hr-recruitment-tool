import React from 'react';

const PdfIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, color }) => (
  <svg className={className} width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.499 20.498v-7.5M4.5 13h.75a2.25 2.25 0 010 4.5H4.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M10.5 20.5a3 3 0 003-3V16a3 3 0 00-3-3v7.5z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 20.5v-6A1.5 1.5 0 0118 13h1.5M16.499 17.498h2.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M22.809 6.559a1.5 1.5 0 01.44 1.06V22A2.25 2.25 0 0121 24.248H3A2.25 2.25 0 01.749 22V4A2.25 2.25 0 013 1.748h14.377a1.5 1.5 0 011.061.439l4.371 4.372z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.249 1.748v4.5a1.5 1.5 0 001.5 1.5h4.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PdfIcon;
