import { ButtonHTMLAttributes } from "react";
import IfElse from "./IfElse";
import { Loader } from "./Loader";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function PrimaryButton({
  children,
  isLoading = false,
  ...rest
}: IButtonProps) {
  return (
    <button
      className="flex justify-center w-full px-5 py-2 text-white rounded-lg bg-primary-600 disabled:bg-primary-600/50"
      {...rest}
    >
      <IfElse isTrue={isLoading} ifBlock={<Loader />} elseBlock={children} />
    </button>
  );
}
