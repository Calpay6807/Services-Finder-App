import React from "react";
import { useState } from "react";

const ImgFallBack = (props) => {
  //   const [imageSrc, setImageSrc] = useState(props.src);
  //   const handleError = () => {
  //     setImageSrc("/public/assets/image/no-image.png");
  //   };
  //   return (
  //     <img
  //       src={imageSrc}
  //       style={props.style}
  //       className={props.className}
  //       onError={handleError}
  //       alt="Resim"
  //     />
  //   );

  return (
    <img
      src={props.src}
      className={props.className}
      style={props.style}
      onError={(e) => {
        e.target.src = "/public/assets/image/no-image.png";
      }}
    />
  );
};

export default ImgFallBack;
