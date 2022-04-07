import React, { FC } from "react";
import "./index.css";

const Loader: FC = () => {
  return (
    <div className="loaderWrapper">
      <div id="loader">
        {["a", "b", "c", "d", "e", "f", "g", "h"].map((val) => (
          <div className={`l ${val}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
