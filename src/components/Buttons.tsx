import clsx from "clsx";
import { observer } from "mobx-react";
import * as React from "react";

interface ButtonProps {
  children: React.ReactNode | React.ReactNode[];
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

function getClassName({ className }: { className?: string }) {
  return clsx(
    "group relative flex flex-grow top-0  left-0  opacity-100 disabled:opacity-50 transition",
    className
  );
}

const ButtonInner = observer(function ButtonInner({
  children,
  variant,
  size = "large",
}: Pick<ButtonProps, "children" | "variant" | "size">) {
  return (
    <>
      <div
        className={clsx(
          "focus-ring border-2 absolute rounded-full inset-1 transform  opacity-100 transition disabled:opacity-50",
          {
            "group-hover:border-transparent group-focus:border-transparent":
              variant === "secondary",
          }
        )}
      >
        <div
          className={clsx(
            "relative flex flex-grow h-full w-full items-center justify-center whitespace-nowrap",
            {
              "text-primary": variant === "secondary",
              "text-inverse": variant === "primary",
              "space-x-3": size === "large",
              "text-base px-5": size === "medium",
              "text-sm px-2": size === "small",
            }
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
});

const Button =  observer(function Button({
  children,
  variant = "primary",
  size = "large",
  className,
  ...buttonProps
}: ButtonProps & JSX.IntrinsicElements["button"]) {
  return (
    <button {...buttonProps} className={getClassName({ className })}>
      <ButtonInner variant={variant} size={size}>
        {children}
      </ButtonInner>
    </button>
  );
});

export { Button };
