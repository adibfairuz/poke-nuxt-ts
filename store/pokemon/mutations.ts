import { MutationTree } from "vuex";
import { PokemonResult } from "~/services/types";
import { PokemonState } from ".";
import { ResponseState } from "../types";

const mutations: MutationTree<PokemonState> = {
    GET_ALL_POKEMON_FETCH(state, payload: ResponseState<PokemonResult[]>) {
        state.pokemons = {
            isLoading: true,
            data: state.pokemons.data,
            ok: true,
            status: undefined
        };
    },
    GET_ALL_POKEMON_SUCCESS(state, payload: ResponseState<PokemonResult[]>) {
        state.pokemons = {
            isLoading: false,
            data: payload.data,
            ok: true,
            status: payload.status
        };
    },
    GET_ALL_POKEMON_ERROR(state, payload: ResponseState<PokemonResult[]>) {
        state.pokemons = {
            isLoading: false,
            data: payload.data,
            ok: false,
            status: payload.status
        };
    },
    GET_POKEMON_FETCH(state, payload: ResponseState<PokemonResult>) {
        state.pokemon = {
            isLoading: true,
            data: {},
            ok: true,
            status: undefined
        };
    },
    GET_POKEMON_SUCCESS(state, payload: ResponseState<PokemonResult>) {
        state.pokemon = {
            isLoading: false,
            data: payload.data,
            ok: true,
            status: payload.status
        };
    },
    GET_POKEMON_ERROR(state, payload: ResponseState<PokemonResult>) {
        state.pokemon = {
            isLoading: false,
            data: payload.data,
            ok: false,
            status: payload.status
        };
    },
    ADD_OR_REMOVE_FAVORITE_FETCH(state, payload: ResponseState<PokemonResult>) {
        state.pokemon = {
            isLoading: false,
            data: payload.data,
            ok: true,
            status: payload.status
        };
    },
    ADD_OR_REMOVE_FAVORITE_SUCCESS(state, payload: ResponseState<PokemonResult>) {
        state.pokemon = {
            isLoading: false,
            data: payload.data,
            ok: true,
            status: payload.status
        };
    },
    ADD_OR_REMOVE_FAVORITE_ERROR(state, payload: ResponseState<PokemonResult>) {
        state.pokemon = {
            isLoading: false,
            data: payload.data,
            ok: false,
            status: payload.status
        };
    },
    GET_ALL_FAVORITE_FETCH(state, payload: ResponseState<PokemonResult[]>) {
        state.favorites = {
            isLoading: true,
            data: state.favorites.data,
            ok: true,
            status: undefined
        };
    },
    GET_ALL_FAVORITE_SUCCESS(state, payload: ResponseState<PokemonResult[]>) {
        state.favorites = {
            isLoading: false,
            data: payload.data,
            ok: true,
            status: payload.status
        };
    },
    GET_ALL_FAVORITE_ERROR(state, payload: ResponseState<PokemonResult[]>) {
        state.favorites = {
            isLoading: false,
            data: payload.data,
            ok: false,
            status: payload.status
        };
    },
};

export default mutations