import BrandDropdown from "@common/components/brand-dropdown/brand-dropdown";
import React from "react";

const OptionsHeader: React.FC = () => {
  return (
    <div className="w-full px-20 mt-20 flex items-center justify-between">
      <BrandDropdown />
    </div>
  );
};

export default OptionsHeader;
