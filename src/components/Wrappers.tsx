import * as React from "react";

import clsx from "clsx";

interface TextWrap {
  children: React.ReactNode;
  options?: {
    section?: boolean;
    uppercase?: boolean;
    datestyle?: true;
  };
  className?: "string";
}

export default function TextStyleWrap({
  children,
  options,
  className,
}: TextWrap) {
  return (
    <div
      className={clsx(
        className,
        "align-top text-sm sm:text-base",
        options?.section &&
          "border-b-2 uppercase border-slate-300 mb-4 mt-6 sm:mt-7 sm:mb-4 h-6 sm:h-7  tracking-widest text-slate-600 text-xs sm:text-sm",
        options?.uppercase && "uppercase text-xs sm:text-sm",
        options?.datestyle && "text-slate-500 text-xs sm:text-xs"
      )}
    >
      {children}
    </div>
  );
}

interface GradientWrap {
  children: React.ReactNode;
  className?: string;
}

export function GradientStyleWrap({ children, className }: GradientWrap) {
  return (
    <span
      className={clsx(
        className,
        "font-semibold text-transparent bg-clip-text  bg-gradient-to-r from-blue-600 to-violet-600"
      )}
    >
      {children}
    </span>
  );
}

interface IconWrap {
  children: React.ReactNode;
  style: { border: string };
}

export function IconStyleWrap({ children, style }: IconWrap) {
  return (
    <div
      className="icon-placeholder flex justify-center items-center"
      style={style}
    >
      {children}
    </div>
  );
}
