import { useQuery } from "@tanstack/react-query";
import { MouseService } from "../../../services/mouse-service/mouse-service";

export const useGetMouseById = (id?: string) => {
  const { data, isLoading, error } = useQuery(["useGetMouseById", id], () =>
    MouseService.getMouseById({ id })
  );

  return {
    mouse: data,
    isLoading,
    error,
  };
};
