import React, { useContext } from "react";
import { LoaderContext } from "../../Routing";
import { Loader } from "../Loader/Loader";

export const WithLoader = (Component: any) => {
  return () => {
    const [isLoading] = useContext(LoaderContext);

    return (
      <>
        <Component />
        {isLoading && <Loader />}
      </>
    );
  };
};
