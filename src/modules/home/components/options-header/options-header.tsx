import React from "react";
import BrandDropdown from "@common/components/brand-dropdown/brand-dropdown";
import ShapeDropdown from "@common/components/shape-dropdown/shape-dropdown";
import SizeDropdown from "@common/components/size-dropdown/size-dropdown";

interface Props {
  brand: {
    value?: string;
    onChange: (brand: string) => void;
  };
  shape: {
    value?: string;
    onChange: (shape: string) => void;
  };
  size: {
    value?: "S" | "M" | "L";
    onChange: (size: "S" | "M" | "L") => void;
  };
}

const OptionsHeader: React.FC<Props> = ({ brand, shape, size }) => {
  return (
    <div className="w-full px-20 mt-20 flex items-center justify-start gap-4">
      <BrandDropdown brand={brand} />
      <SizeDropdown selected={size} />
      <ShapeDropdown selected={shape} />
    </div>
  );
};

export default OptionsHeader;
