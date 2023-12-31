import IfElse from "@/shared/IfElse";
import useContainer from "./useContainer";

interface IImageWithFallback {
  src: string;
  fallback?: JSX.Element;
  alt?: string;
}

function ImageWithFallback({
  src,
  fallback: fallbackSrc,
  alt,
}: IImageWithFallback) {
  const { errorShowingImage, handleImageError } = useContainer();

  return (
    <div className="w-full h-full">
      <div className="w-full rounded-full h-full flex items-center justify-center">
        <IfElse
          isTrue={errorShowingImage || !src}
          ifBlock={
            <IfElse
              isTrue={fallbackSrc !== undefined}
              ifBlock={fallbackSrc}
              elseBlock={
                <div className="bg-black/10 flex items-center justify-center h-full">
                  Couldn't load the image
                </div>
              }
            />
          }
          elseBlock={
            <img
              className="w-full h-full"
              src={src}
              alt={alt}
              onError={handleImageError}
            />
          }
        />
      </div>
    </div>
  );
}
export default ImageWithFallback;
