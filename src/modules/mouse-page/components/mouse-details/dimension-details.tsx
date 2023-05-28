import { Separator } from "@common/components/ui/separator";
import { Mouse } from "@common/interfaces/mouse";
import React from "react";

interface Props {
  mouse?: Mouse;
}

const DimensionDetails: React.FC<Props> = ({ mouse }) => {
  return (
    <>
      <h4 className="mt-10 mb-2 text-lg font-semibold tracking-tight">
        Dimensions
      </h4>
      <Separator />
      <div className="mt-4 text-left flex gap-4 items-center justify-between">
        <div>
          <h6 className="text-sm font-semibold tracking-tight">Width</h6>
          <p className="text-xs text-muted-foreground capitalize">
            {mouse?.width}
          </p>
        </div>
        <div>
          <h6 className="text-sm font-semibold tracking-tight">Height</h6>
          <p className="text-xs text-muted-foreground capitalize">
            {mouse?.height}
          </p>
        </div>
        <div>
          <h6 className="text-sm font-semibold tracking-tight">Length</h6>
          <p className="text-xs text-muted-foreground capitalize">
            {mouse?.length}
          </p>
        </div>
        <div>
          <h6 className="text-sm font-semibold tracking-tight">Weight</h6>
          <p className="text-xs text-muted-foreground capitalize">
            {mouse?.weight}
          </p>
        </div>
      </div>
    </>
  );
};

export default DimensionDetails;
