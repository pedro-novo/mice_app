import React from "react";
import { useNavigate } from "react-router-dom";
import { Mouse } from "@common/interfaces/mouse";
import { MoreVertical } from "lucide-react";
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
  "brand",
  "model",
  "width",
  "height",
  "length",
  "weight",
  "more",
];

const MiceTable: React.FC<Props> = ({ mice }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-10">
      <Table>
        <TableCaption>A list of mice.</TableCaption>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header} className="capitalize">
                {header === "width" || header === "height" ? (
                  <>
                    {header}
                    <br />
                    {"F | M | B"}
                  </>
                ) : (
                  header
                )}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {mice?.map((mouse) => (
            <TableRow key={mouse.id}>
              <TableCell className="capitalize">{mouse.brand}</TableCell>
              <TableCell>{mouse.model}</TableCell>
              <TableCell>{`${mouse.width[0]} | ${mouse.width[1]} | ${mouse.width[2]}`}</TableCell>
              <TableCell>{`${mouse.height[0]} | ${mouse.height[1]} | ${mouse.height[2]}`}</TableCell>
              <TableCell>{mouse.length}</TableCell>
              <TableCell>{mouse.weight}</TableCell>
              <TableCell
                className="cursor-pointer"
                onClick={() => navigate(`/${mouse.id}`)}
              >
                <MoreVertical />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MiceTable;
