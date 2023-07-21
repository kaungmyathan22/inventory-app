import { useState } from "react";

const useContainer = () => {
  const [errorShowingImage, setErrorShowingImage] = useState(false);
  const handleImageError = () => {
    setErrorShowingImage(true);
  };
  return {
    errorShowingImage,
    handleImageError,
  };
};

export default useContainer;
