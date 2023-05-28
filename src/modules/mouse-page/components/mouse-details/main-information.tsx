import { Separator } from "@common/components/ui/separator";
import { Mouse } from "@common/interfaces/mouse";
import React from "react";

interface Props {
  mouse?: Mouse;
}

const MainInformation: React.FC<Props> = ({ mouse }) => {
  return (
    <>
      <h4 className="mt-10 mb-2 text-lg font-semibold tracking-tight">
        Main Information
      </h4>
      <Separator />
      <div className="mt-4 text-left flex gap-4 items-start justify-between">
        <div className="w-[50%] text-left">
          <h4 className="text-sm font-semibold tracking-tight">Brand</h4>
          <p className="text-sm text-muted-foreground capitalize">
            {mouse?.brand}
          </p>
        </div>
        <div className="w-[50%] text-left">
          <h4 className="text-sm font-semibold tracking-tight">Model</h4>
          <p className="text-sm text-muted-foreground">{mouse?.model}</p>
        </div>
      </div>
      <div className="mt-4 text-left flex gap-4 items-start justify-between">
        <div className="w-[50%] text-left">
          <h4 className="text-sm font-semibold tracking-tight">DPI</h4>
          <p className="text-sm text-muted-foreground capitalize">
            {mouse?.dpi}
          </p>
        </div>
        <div className="w-[50%] text-left">
          <h4 className="text-sm font-semibold tracking-tight">Polling Rate</h4>
          <p className="text-sm text-muted-foreground">{mouse?.polling_rate}</p>
        </div>
      </div>
      <div className="mt-4 text-left flex gap-4 items-start justify-between">
        <div className="w-[50%] text-left">
          <h4 className="text-sm font-semibold tracking-tight">Wireless</h4>
          <p className="text-sm text-muted-foreground capitalize">
            {mouse?.wireless ? "true" : "false"}
          </p>
        </div>
        <div className="w-[50%] text-left">
          <h4 className="text-sm font-semibold tracking-tight">Shape</h4>
          <p className="text-sm text-muted-foreground capitalize">
            {mouse?.shape.toLowerCase()}
          </p>
        </div>
      </div>
      <div className="mt-4 text-left flex gap-4 items-start justify-between">
        <div className="w-[50%] text-left">
          <h4 className="text-sm font-semibold tracking-tight">Material</h4>
          <p className="text-sm text-muted-foreground capitalize">
            {mouse?.material.toLowerCase()}
          </p>
        </div>
        <div className="w-[50%] text-left">
          <h4 className="text-sm font-semibold tracking-tight">Launch Date</h4>
          <p className="text-sm text-muted-foreground">
            {mouse?.launch_date ? mouse.launch_date.toString() : "---"}
          </p>
        </div>
      </div>
    </>
  );
};

export default MainInformation;
