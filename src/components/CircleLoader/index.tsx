import React, { FC } from "react";

import CircleLoaderProps from "../../types/circleLoader";
import "./index.css";

const CircleLoader: FC<CircleLoaderProps> = ({
  loadingText,
  fullHeightWithNav,
}) => {
  return (
    <div
      className={
        "circle-loader" +
        (!!fullHeightWithNav ? " circle-loader--full-height-with-nav" : "")
      }
    >
      <div className="circle-loader__spinner"></div>
      {!!loadingText && (
        <div className="circle-loader__text">{loadingText}</div>
      )}
    </div>
  );
};

export default CircleLoader;
