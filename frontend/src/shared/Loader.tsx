import cn from "classnames";
interface ILoaderProps {
  className?: string;
  borderColor?: string;
}
export function Loader({
  className = "",
  borderColor = "border-white",
}: ILoaderProps) {
  return (
    <div
      className={cn(
        `w-[23px] border-2  rounded-full h-[23px] border-r-transparent animate-spin ${className} ${borderColor}`
      )}
    />
  );
}
