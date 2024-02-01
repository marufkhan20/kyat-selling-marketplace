import { cn } from "@/lib/utills";

const Label = ({ htmlFor = "", className = "", children }) => {
  return (
    <label htmlFor={htmlFor} className={cn("text-", className)}>
      {children}
    </label>
  );
};

export default Label;
