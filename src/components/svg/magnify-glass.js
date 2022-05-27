import React from "react"

export default function MagnifyGlass (props) {
    return (
      <svg
        width={15}
        height={15}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.328 9.802a4.837 4.837 0 000-6.818 4.785 4.785 0 00-6.789 0 4.837 4.837 0 000 6.818 4.785 4.785 0 006.789 0zm.36 1.12a5.848 5.848 0 01-7.903-.362 5.911 5.911 0 010-8.334 5.848 5.848 0 018.297 0 5.913 5.913 0 01.36 7.938l3.788 3.805a.537.537 0 010 .758.532.532 0 01-.754 0l-3.788-3.805z"
          fill="currentColor"
        />
      </svg>
    );
  }