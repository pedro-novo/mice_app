import { Material } from "../enums/material";
import { Shape } from "../enums/shape";

export interface Mouse {
  id: string;
  brand: string;
  model?: string;
  width: (number | null)[];
  height: (number | null)[];
  length: number;
  weight: number;
  shape: Shape;
  wireless: boolean;
  sensor?: string;
  mcu?: string;
  dpi?: string;
  polling_rate?: string;
  switches?: string;
  mouse_wheel_encoder?: string;
  material: Material;
  launch_date?: Date;
}
