import { cn } from "cn";
import { ReactNode } from "react";

const MaxWidthContainer = ({ className, children }: { className?: String; children: ReactNode }) => {
  return <main className={cn(className, "max-w-7xl mx-auto")}>{children}</main>;
};

export default MaxWidthContainer;
