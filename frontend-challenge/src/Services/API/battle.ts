import { Battle } from "../../interfaces";
import { publicAxiosInstance } from "./config";

export const getBattles = async (): Promise<Battle[]> => {
    const { data } = await publicAxiosInstance.get<Battle[]>(`/battle`,)
    return { ...data }
};


export const createBattle = async (pokemonOne: string, pokemonTwo: string) => {
    const { data } = await publicAxiosInstance.post<Battle>(`/battle`, { pokemonOne, pokemonTwo })
    return data
};