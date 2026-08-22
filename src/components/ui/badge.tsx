import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-brand-100 text-brand-800",
        secondary: "border-transparent bg-slate-100 text-slate-800",
        outline: "text-slate-700 border border-slate-200",
        safe: "border-transparent bg-emerald-100 text-emerald-800 border border-emerald-300",
        target: "border-transparent bg-amber-100 text-amber-900 border border-amber-300",
        dream: "border-transparent bg-purple-100 text-purple-900 border border-purple-300",
        highlight: "border-transparent bg-yellow-100 text-yellow-900 font-bold",
        public: "bg-blue-50 text-blue-700 border border-blue-200",
        private: "bg-orange-50 text-orange-700 border border-orange-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
