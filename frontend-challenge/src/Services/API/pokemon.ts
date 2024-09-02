import { Pokemon } from "../../interfaces";
import { publicAxiosInstance } from "./config";

export const getPokemon = async (): Promise<Pokemon[]> => {
    const { data } = await publicAxiosInstance.get<Pokemon[]>(`/pokemon`,)
    return { ...data }
};
