import { GetterTree } from "vuex";
import { PokemonState } from ".";
import { RootState } from "../types";

const getters: GetterTree<PokemonState, RootState> = {
    pokemons: (state) => state.pokemons,
    pokemon: (state) => state.pokemon,
    favorites: (state) => state.favorites,
};

export default getters