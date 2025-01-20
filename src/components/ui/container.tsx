import { cn } from "@/utilities/ui";

const containerSizes = {
  base: "max-w-[1184px]",
  contained: "max-w-[1024px]",
  thin: "max-w-[996px]",
};

export default function Container({
  size = "base",
  children,
  className,
  ...props
}: {
  size?: keyof typeof containerSizes;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 lg:px-6",
        containerSizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
