import { NuxtAxiosInstance } from "@nuxtjs/axios"
import { API } from "~/config/urls"
import { AddOrRemoveFavoritePayload, AddOrRemoveFavoriteResponse, FavoritesPayload, FavoritesResponse, PokemonPayload, PokemonResponse, PokemonsPayload, PokemonsResponse, Response } from "./types"

const pokemon = ($axios: NuxtAxiosInstance) => {
    return {
        getAll(payload: PokemonsPayload){
            return $axios.get<Response<PokemonsResponse>>(`${API}/pokemon`, {params: payload})
        },
        getDetail(payload: PokemonPayload){
            return $axios.get<Response<PokemonResponse>>(`${API}/pokemon/${payload.name}`)
        },
        addOrRemoveFavorite(payload: AddOrRemoveFavoritePayload){
            return $axios.post<Response<AddOrRemoveFavoriteResponse>>(`${API}/pokemon/favorite/${payload.id}`)
        },
        getFavorites(payload: FavoritesPayload){
            return $axios.get<Response<FavoritesResponse>>(`${API}/pokemon/favorite`, {params: payload})
        },
    }
}

export type PokemonService = ReturnType<typeof pokemon>

export default pokemon