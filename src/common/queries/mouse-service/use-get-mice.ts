import { useQuery } from "@tanstack/react-query";
import { MouseService } from "../../../services/mouse-service/mouse-service";

export const useGetMice = ({
  brand,
  shape,
}: {
  brand?: string;
  shape?: string;
}) => {
  const { data, isLoading, error } = useQuery(
    ["useGetMice", brand, shape],
    () => MouseService.getMice({ brand, shape })
  );

  return {
    mice: data,
    isLoading,
    error,
  };
};
