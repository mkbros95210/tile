import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
    >
      {children}
    </button>
  );
}
