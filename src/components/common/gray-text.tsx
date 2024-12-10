import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type GrayTextProps<TElement extends ElementType> = {
  component?: TElement;
  className?: string;
  children?: ReactNode;
} & React.ComponentPropsWithoutRef<TElement>;

export const GrayText = <TElement extends ElementType = "p">(
  props: GrayTextProps<TElement>,
) => {
  const { component: Component = "p", className, children, ...rest } = props;

  return (
    <Component
      className={cn("text-gray-500 dark:text-brand-gray", className)}
      {...rest}
    >
      {children}
    </Component>
  );
};
