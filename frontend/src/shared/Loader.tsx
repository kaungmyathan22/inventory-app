interface ILoaderProps {
  className?: string;
}
export function Loader({ className }: ILoaderProps) {
  return (
    <div
      className={`w-[23px] border-2 border-white rounded-full h-[23px] border-r-transparent animate-spin ${className}`}
    />
  );
}
