import { useMutation } from "@tanstack/react-query";
import { MouseService } from "../../../services/mouse-service/mouse-service";
import { Mouse } from "../../interfaces/mouse";

export const useUpdateMouse = () => {
  const { data, isLoading, error, mutate } = useMutation(
    ({ id, mouse }: { id: string; mouse: Mouse }) =>
      MouseService.updateMouse({ id, mouse })
  );

  return {
    mouse: data,
    isLoading,
    error,
    updateMouse: ({ id, mouse }: { id: string; mouse: Mouse }) =>
      mutate({ id, mouse }),
  };
};
