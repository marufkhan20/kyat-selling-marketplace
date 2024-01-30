import { cn } from "@/lib/utills";
import Link from "next/link";

const Button = ({
  variant = "primary",
  type = "button",
  href,
  size = "lg",
  className = "",
  onClick,
  children,
  ...rest
}) => {
  const styles =
    variant === "primary"
      ? `bg-primary text-white rounded-md transition-all hover:bg-[#17171D] ${
          size === "lg" && "px-8 py-4 font-semibold"
        } ${size === "sm" && "px-4 py-2"}`
      : `bg-[#e0eeff] text-primary rounded-md transition-all hover:bg-[#CFE5FC] ${
          size === "lg" && "px-8 py-4 font-semibold"
        } ${size === "sm" && "px-4 py-2"}`;

  return href ? (
    <Link href={href} className={cn(styles, className)} {...rest}>
      {children}
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={cn(styles, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
