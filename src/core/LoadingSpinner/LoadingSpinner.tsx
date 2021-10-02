// Generated with util/create-component.js
import React, { CSSProperties } from "react";

import { LoadingSpinnerProps } from "./LoadingSpinner.types";

import "./Loader.css";

const LoadingSpinner: React.FC<LoadingSpinnerProps> = (props) => {
  const colorStyle: CSSProperties = {
    background: "black",
  };
  return (
    <div className="lds-ellipsis">
      <div style={colorStyle}></div>
      <div style={colorStyle}></div>
      <div style={colorStyle}></div>
      <div style={colorStyle}></div>
    </div>
  );
};

export default LoadingSpinner;
