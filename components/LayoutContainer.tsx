import { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

export default function LayoutContainer({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        w-full
        max-w-[1920px]
        mx-auto
        px-14
        md:px-20
        xl:px-24
        ${className}
      `}
    >
      {children}
    </div>
  )
}