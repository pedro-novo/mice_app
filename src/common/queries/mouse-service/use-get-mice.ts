import { useQuery } from "@tanstack/react-query";
import { MouseService } from "../../../services/mouse-service/mouse-service";

export const useGetMice = () => {
  const { data, isLoading, error } = useQuery(["useGetMice"], () =>
    MouseService.getMice()
  );

  return {
    mice: data,
    isLoading,
    error,
  };
};
