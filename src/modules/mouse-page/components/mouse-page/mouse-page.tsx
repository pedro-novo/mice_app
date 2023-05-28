import { useGetMouseById } from "@common/queries/mouse-service/use-get-mouse-by-id";
import React from "react";
import { useParams } from "react-router-dom";
import MouseImage from "../mouse-image/mouse-image";
import { Separator } from "@common/components/ui/separator";
import MainInformation from "../mouse-details/main-information";
import DimensionDetails from "../mouse-details/dimension-details";
import TechnicalDetails from "../mouse-details/technical-details";

export const MousePage: React.FC = () => {
  const { id } = useParams();
  const { mouse } = useGetMouseById(id);

  return (
    <div className="p-10 flex items-center justify-center">
      <div className="h-[400px] items-center flex-col md:h-[500px] lg:h-[800px] lg:max-w-none md:grid lg:grid-cols-2 lg:px-0">
        <MouseImage />
        <div className="mt-20 md:mt-10 lg:mt-0">
          <div className="mx-auto mb-20 lg:mb-0 flex w-full flex-col justify-center sm:w-[400px]">
            <div className="flex flex-col text-center">
              <h1 className="mb-2 text-2xl text-left font-semibold tracking-tight">
                Mouse Information
              </h1>
              <Separator />
            </div>
            <MainInformation mouse={mouse} />
            <DimensionDetails mouse={mouse} />
            <TechnicalDetails mouse={mouse} />
          </div>
        </div>
      </div>
    </div>
  );
};
