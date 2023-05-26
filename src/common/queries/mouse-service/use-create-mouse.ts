import { useMutation } from "@tanstack/react-query";
import { Mouse } from "../../interfaces/mouse";
import { MouseService } from "../../../services/mouse-service/mouse-service";

export const useCreateMouse = () => {
  const { data, isLoading, error, mutate } = useMutation((mouse: Mouse) =>
    MouseService.createMouse({ mouse })
  );

  return {
    mouse: data,
    isLoading,
    error,
    createMouse: (mouse: Mouse) => mutate(mouse),
  };
};
