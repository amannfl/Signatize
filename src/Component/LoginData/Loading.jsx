import React from "react";
import Loader from "react-loader-spinner";

const Loading = ({ color, width, height, type }) => {
  return (
    <>
      <Loader type={type} color={color} height={height} width={width} />
    </>
  );
};

export default Loading;
