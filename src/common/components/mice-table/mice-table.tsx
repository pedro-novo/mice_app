import React from "react";
import { Mouse } from "@common/interfaces/mouse";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/table";

interface Props {
  mice?: Mouse[];
}

const headers = [
  "Brand",
  "Model",
  "Width",
  "Height",
  "Length",
  "Weight",
  "Shape",
  "Wireless",
  "Sensor",
  "MCU",
  "DPI",
  "Polling Rate",
  "Switches",
  "Mouse Wheel Encoder",
  "Material",
  "Launch Date",
];

const MiceTable: React.FC<Props> = ({ mice }) => {
  return (
    <div className="w-full mt-10 px-20">
      <Table>
        <TableCaption>A list of mice.</TableCaption>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {mice?.map((mouse) => (
            <TableRow key={mouse.id}>
              <TableCell>{mouse.brand}</TableCell>
              <TableCell>{mouse.model}</TableCell>
              <TableCell>{mouse.width}</TableCell>
              <TableCell>{mouse.height}</TableCell>
              <TableCell>{mouse.length}</TableCell>
              <TableCell>{mouse.weight}</TableCell>
              <TableCell>{mouse.shape}</TableCell>
              <TableCell>{mouse.wireless}</TableCell>
              <TableCell>{mouse.sensor}</TableCell>
              <TableCell>{mouse.mcu}</TableCell>
              <TableCell>{mouse.dpi}</TableCell>
              <TableCell>{mouse.polling_rate}</TableCell>
              <TableCell>{mouse.switches}</TableCell>
              <TableCell>{mouse.mouse_wheel_encoder}</TableCell>
              <TableCell>{mouse.material}</TableCell>
              <TableCell>{mouse.launch_date?.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MiceTable;
