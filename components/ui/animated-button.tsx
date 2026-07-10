import Link from "next/link";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "outline";
}

/**
 * Diagonal sweep animated button.
 * Variant "primary"  → white text on dark bg, sweeps purple on hover
 * Variant "outline"  → white bg with outline, sweeps purple on hover
 */
export function AnimatedButton({
  href,
  onClick,
  children,
  className,
  type = "button",
  disabled,
  variant = "primary",
}: AnimatedButtonProps) {
  const base =
    "relative inline-flex items-center justify-center overflow-hidden font-semibold text-sm transition-all rounded-2xl group outline outline-1 px-8 py-3.5 whitespace-nowrap";

  const variants = {
    primary:
      "bg-foreground text-white outline-foreground hover:bg-foreground",
    outline:
      "bg-white text-foreground outline-border hover:bg-white",
  };

  const sweep =
    "w-56 h-56 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0";

  const textColor =
    variant === "primary"
      ? "relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white"
      : "relative z-10 transition-colors duration-300 ease-in-out text-foreground group-hover:text-white";

  const sharedProps = {
    className: cn(base, variants[variant], disabled && "opacity-60 pointer-events-none", className),
    onClick,
  };

  const inner = (
    <>
      <span className={sweep} />
      <span className={`${textColor} inline-flex items-center gap-2`}>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} {...sharedProps}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} {...sharedProps}>
      {inner}
    </button>
  );
}
