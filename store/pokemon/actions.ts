import {ActionTree} from 'vuex'
import { PokemonState } from '.';
import { AddOrRemoveFavoritePayload, FavoritesPayload, PokemonPayload, PokemonResult, PokemonsPayload } from '~/services/types';
import { AxiosError } from 'axios';
import { ResponseState, RootState } from '../types';
import { responseError, responseSuccess } from '~/utils/responses';

const actions: ActionTree<PokemonState, RootState> = {
    async getPokemons({commit, state}, payload: PokemonsPayload){
        try {
            commit('GET_ALL_POKEMON_FETCH')
            const res = await this.$services.pokemon.getAll(payload)
            commit('GET_ALL_POKEMON_SUCCESS', responseSuccess(res))
            return responseSuccess(res)
        } catch(e) {
            const error = e as AxiosError;
            commit('GET_ALL_POKEMON_ERROR', responseError(error))
            throw responseError(error)
        }
    },
    async addOrRemoveFavorite({commit, state}, payload: AddOrRemoveFavoritePayload){
        const pokemonData = <PokemonResult>state.pokemon.data
        try {
            let pokemonState: ResponseState<PokemonResult> = {
                ...state.pokemon,
                data: {
                    ...pokemonData,
                    is_favorited: !pokemonData.is_favorited
                }
            }
            commit('ADD_OR_REMOVE_FAVORITE_FETCH', pokemonState)
            const res = await this.$services.pokemon.addOrRemoveFavorite(payload)
            const { data } = res.data
            pokemonState = {
                ...state.pokemon,
                data: {
                    ...pokemonData,
                    is_favorited: data.is_favorited
                }
            }
            commit('ADD_OR_REMOVE_FAVORITE_SUCCESS', pokemonState)
            return responseSuccess(res)
        } catch(e) {
            const error = e as AxiosError;
            commit('ADD_OR_REMOVE_FAVORITE_ERROR', state.pokemon)
            throw responseError(error)
        }
    },
    async getPokemon({commit, state}, payload: PokemonPayload){
        try {
            commit('GET_POKEMON_FETCH')
            const res = await this.$services.pokemon.getDetail(payload)
            commit('GET_POKEMON_SUCCESS', responseSuccess(res))
            return responseSuccess(res)
        } catch(e) {
            const error = e as AxiosError;
            commit('GET_POKEMON_ERROR', responseError(error))
            throw responseError(error)
        }
    },
    async getFavorites({commit, state}, payload: FavoritesPayload){
        try {
            commit('GET_ALL_FAVORITE_FETCH')
            const res = await this.$services.pokemon.getFavorites(payload)
            commit('GET_ALL_FAVORITE_SUCCESS', responseSuccess(res))
            return responseSuccess(res)
        } catch(e) {
            const error = e as AxiosError;
            commit('GET_ALL_FAVORITE_ERROR', responseError(error))
            throw responseError(error)
        }
    },
};

export default actions