import { FC } from "react";

import { ILoader } from "../../types/loader";
import "./index.css";

const Loader: FC<ILoader> = ({ message }) => {
  return (
    <div className="loader-container">
      <div className="loader" />
      <span className="loading-text">{message ? message : "Loading..."}</span>
    </div>
  );
};
export default Loader;
