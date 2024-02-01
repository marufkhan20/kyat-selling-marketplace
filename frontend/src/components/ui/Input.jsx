import { cn } from "@/lib/utills";

const Input = ({
  value,
  type = "",
  onChange,
  className = "",
  placeholder = "",
  id = "",
  ...rest
}) => {
  return (
    <input
      value={value}
      type={type}
      className={cn(
        "bg-[#F0F6FE] px-4 py-3 rounded-lg outline-none w-full block",
        className
      )}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
      {...rest}
    />
  );
};

export default Input;
