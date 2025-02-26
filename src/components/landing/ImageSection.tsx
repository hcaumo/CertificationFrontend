import * as React from "react";
import { cn } from "@/lib/utils";

interface ImageSectionProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
}

export const ImageSection: React.FC<ImageSectionProps> = ({
  src,
  alt = "Landing page section",
  className,
  ...props
}) => {
  return (
    <section className={cn("w-full overflow-hidden", className)} {...props}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="aspect-[1.78] object-contain w-full max-md:max-w-full"
      />
    </section>
  );
};
