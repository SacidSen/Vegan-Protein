import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

export default function Container({ children, className, ...props }: ContainerProps) {
  return <div {...props} className={`mx-auto w-full max-w-[1100px] px-5 sm:px-8 ${className ?? ""}`}>{children}</div>;
}
