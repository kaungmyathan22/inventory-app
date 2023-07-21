import React, { ImgHTMLAttributes } from "react";

const Logo: React.FC<ImgHTMLAttributes<HTMLImageElement>> = (...props) => {
  return <img src={"/assets/klink.png"} alt="Logo" {...props} />;
};

export default Logo;
