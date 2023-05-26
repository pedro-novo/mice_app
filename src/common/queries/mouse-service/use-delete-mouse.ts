import { useMutation } from "@tanstack/react-query";
import { MouseService } from "../../../services/mouse-service/mouse-service";

export const useDeleteMouse = () => {
  const { data, isLoading, error, mutate } = useMutation((id: string) =>
    MouseService.deleteMouse({ id })
  );

  return {
    data,
    isLoading,
    error,
    deleteMouse: (id: string) => mutate(id),
  };
};
