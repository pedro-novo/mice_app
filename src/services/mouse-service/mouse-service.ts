import { Mouse } from "../../common/interfaces/mouse";
import { axios } from "../../setup/axios/axios-config";

export class MouseService {
  static async getMice() {
    const path = "/mice";

    const { data } = await axios.get<Mouse[]>(path);

    return data;
  }

  static async getMouseById({ id }: { id: string }) {
    const path = `/mice/${id}`;

    const { data } = await axios.get<Mouse>(path);

    return data;
  }

  static async createMouse({ mouse }: { mouse: Mouse }) {
    const path = "/mice";

    const { data } = await axios.post<Mouse>(path, mouse);

    return data;
  }

  static async updateMouse({ id, mouse }: { id: string; mouse: Mouse }) {
    const path = `/mice/${id}`;

    const { data } = await axios.put<Mouse>(path, mouse);

    return data;
  }

  static async deleteMouse({ id }: { id: string }) {
    const path = `/mice/${id}`;

    const { data } = await axios.delete(path);

    return data;
  }
}
