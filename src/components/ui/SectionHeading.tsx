import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle, className, ...props }: SectionHeadingProps) {
  return (
    <div className={twMerge(clsx("text-center mb-12"), className)}>
      <h2
        className="font-serif text-4xl md:text-5xl font-bold mb-4 drop-shadow-md text-white"
        {...props}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg uppercase tracking-widest font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
}
