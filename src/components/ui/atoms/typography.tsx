import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";
import { epilogue, inter } from "@/app/layout";

const typographyVariants = cva(
  "text-sm font-normal tracking-tighter leading-5",
  {
    variants: {
      variant: {
        h1: "text-xl font-bold leading-8",
        h2: "",
        h3: "",
        h4: "",
        h5: "",
        h6: "",
        body1: "text-[13px]",
        body2: "text-[11px]",
        menu: "text-[13px] font-medium leading-3",
        link: "font-bold tracking-wider hover:underline",
        // caption: "font-normal tracking-normal text-sm",
      },
      color: {
        blue: "text-blue-800",
        white: "text-white",
        black: "text-black",
        gray: "text-gray-500",
        orange: "text-orange-700",
      },
      font: {
        inter: cn("font-inter", inter.variable),
        epilogue: cn("font-epilogue", epilogue.variable),
      },
    },
    defaultVariants: {
      variant: "body1",
      color: "blue",
      font: "epilogue",
    },
  }
);

export type TypographyProps = React.HTMLAttributes<HTMLParagraphElement>
  & VariantProps<typeof typographyVariants>
  & { asChild?: boolean; }

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, color, font, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : determineComp(variant);
    return (
      <Comp
        className={cn(typographyVariants({ variant, className, color, font }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };

//@TODO: Investigate why this approach generates a hydration error when using the variant prop with an mapped value
//See the programs section for an example
function determineComp(variant: string | undefined | null) {
  const variantMap: { [key: string]: string } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body1: "p",
    body2: "p",
    link: "p",
    caption: "span",
    menu: "p"
  };

  if (variant) {
    return variantMap[variant];
  }
  return "p";
}
