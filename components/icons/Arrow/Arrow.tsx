import React from "react"
import s from "./Arrow.module.css"
import cn from "clsx"

type ArrowProps = {
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void
  disabled?: boolean
  left?: boolean
}

export const Arrow: React.FC<ArrowProps> = ({ disabled, left, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={cn(left ? s.left : s.right, disabled ? s.disabled : "", "cursor-pointer w-[13px] h-[21px]")}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}