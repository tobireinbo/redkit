// Generated with util/create-component.js
import React, { useLayoutEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import { ResultWrapperProps } from "./ResultWrapper.types";

const ResultWrapper: React.FC<ResultWrapperProps> = ({
  result,
  children,
  className = "",
  timeTillSpinner = 500,
}) => {
  const [showSpinner, setShowSpinner] = useState<boolean>(false);

  useLayoutEffect(() => {
    setShowSpinner(false);
    setTimeout(() => {
      setShowSpinner(true);
    }, timeTillSpinner);
  }, [timeTillSpinner, result]);

  if (result.error) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={className}
      >
        something went wrong!
      </div>
    );
  }

  return (
    <>
      {showSpinner && !result.data && (
        <div
          className={className}
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "auto",
            animation: "0.5s ease open_modal",
          }}
        >
          <LoadingSpinner />
        </div>
      )}
      {result.data &&
        //@ts-ignore
        children(result.data)}
    </>
  );
};

export default ResultWrapper;
