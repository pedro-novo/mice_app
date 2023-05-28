import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Left from "@webp/03-ec1-c-back-left-45.webp";

const MouseImage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img
        src={Left}
        className="w-full min-w-[256px] max-w-[420px] object-cover sm:max-w-[400px] md:max-w-[416px] lg:max-w-[512px]"
      />
      <div className="flex items-center justify-center">
        <ChevronLeft />
        <ChevronRight />
      </div>
    </div>
  );
};

export default MouseImage;
