import { Separator } from "@common/components/ui/separator";
import { Mouse } from "@common/interfaces/mouse";
import React from "react";

interface Props {
  mouse?: Mouse;
}

const TechnicalDetails: React.FC<Props> = ({ mouse }) => {
  return (
    <>
      <h4 className="mt-10 mb-2 text-lg font-semibold tracking-tight">
        Techinal Details
      </h4>
      <Separator />
      <div className="mt-4 text-left flex flex-col gap-4 items-center justify-between">
        <div className="w-full flex items-start justify-between">
          <div className="w-[50%] text-left">
            <h6 className="text-sm font-semibold tracking-tight">Sensor</h6>
            <p className="text-xs text-muted-foreground capitalize">
              {mouse?.sensor}
            </p>
          </div>
          <div className="w-[50%] text-left">
            <h6 className="text-sm font-semibold tracking-tight">
              Micro Controller
            </h6>
            <p className="text-xs text-muted-foreground capitalize">
              {mouse?.mcu}
            </p>
          </div>
        </div>
        <div className="w-full flex items-start justify-between">
          <div className="w-[50%] text-left">
            <h6 className="text-sm font-semibold tracking-tight">Switches</h6>
            <p className="text-xs text-muted-foreground capitalize">
              {mouse?.switches}
            </p>
          </div>
          <div className="w-[50%] text-left">
            <h6 className="text-sm font-semibold tracking-tight">
              Mouse Wheel Encoder
            </h6>
            <p className="text-xs text-muted-foreground capitalize">
              {mouse?.mouse_wheel_encoder}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalDetails;
