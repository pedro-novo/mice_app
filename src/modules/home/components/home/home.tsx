import React from "react";
import { useGetMice } from "../../../../common/queries/mouse-service/use-get-mice";

export const Home: React.FC = () => {
  const { mice } = useGetMice();

  return (
    <div>
      <h1>Home</h1>
      <div>{JSON.stringify(mice)}</div>
    </div>
  );
};
