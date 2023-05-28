import React, { useState } from "react";
import { useGetMice } from "../../../../common/queries/mouse-service/use-get-mice";
import OptionsHeader from "../options-header/options-header";
import MiceTable from "@common/components/mice-table/mice-table";

export const Home: React.FC = () => {
  const [brand, setBrand] = useState<string>();
  const [size, setSize] = useState<"S" | "M" | "L">();
  const [shape, setShape] = useState<string>();

  const { mice } = useGetMice({ brand, shape });

  const onBrandChange = (brand: string) => {
    setBrand(brand);
  };

  const onShapeChange = (shape: string) => {
    setShape(shape);
  };

  const onSizeChange = (size: "S" | "M" | "L") => {
    setSize(size);
  };

  return (
    <div>
      <OptionsHeader
        brand={{ value: brand, onChange: onBrandChange }}
        shape={{ value: shape, onChange: onShapeChange }}
        size={{ value: size, onChange: onSizeChange }}
      />
      <MiceTable mice={mice} />
    </div>
  );
};
