import React from "react";
import { useGetMice } from "../../../../common/queries/mouse-service/use-get-mice";
import OptionsHeader from "../options-header/options-header";
import MiceTable from "@common/components/mice-table/mice-table";

export const Home: React.FC = () => {
  const { mice } = useGetMice();

  return (
    <div>
      <OptionsHeader />
      <MiceTable mice={mice} />
    </div>
  );
};
