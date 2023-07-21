import GalleryIcon from "@/shared/Icon/GalleryIcon";
import { HTMLAttributes } from "react";

interface IEmptyImagePlaceholder extends HTMLAttributes<HTMLDivElement> {
  iconSize?: {
    width: number;
    height: number;
  };
}

export function EmptyImagePlaceholder({
  iconSize,
  ...props
}: IEmptyImagePlaceholder) {
  const { width, height } = iconSize || { width: 64, height: 72 };
  return (
    <div
      className="h-full w-full bg-primary-25 rounded-xl flex items-center justify-center"
      {...props}
    >
      <GalleryIcon width={width} height={height} />
    </div>
  );
}
