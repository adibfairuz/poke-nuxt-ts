import { PokemonResult } from "~/services/types";
import { ResponseState } from "../types";

export interface State {
    pokemons: ResponseState<PokemonResult[]>,
    pokemon: ResponseState<PokemonResult | {} | undefined>
    favorites: ResponseState<PokemonResult[]>
}