import React, { FC } from 'react'

interface Props {
  fill: string;
  rotate?: string;
  className?: string;
}

export const Arrow:FC<Props> = ({
  fill,
  rotate = "0",
  className="",
}) => {
  return (
    <svg
      width="24"
      height="16"
      style={{ transform: `rotate(${rotate}deg)` }}
      viewBox="0 0 24 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
        fill={fill}
      />
    </svg>
  );
}
