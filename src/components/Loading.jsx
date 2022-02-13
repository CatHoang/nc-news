import React from "react";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading-page">
      <Oval color="#eec820" height={120} width={120} />
    </div>
  );
};

export default Loading;
