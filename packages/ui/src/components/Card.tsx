import * as React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`p-4 bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
}
