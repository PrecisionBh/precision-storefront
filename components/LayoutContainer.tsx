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
        max-w-[1600px]
        mx-auto
        px-5
        md:px-10
        xl:px-14
        ${className}
      `}
    >
      {children}
    </div>
  )
}