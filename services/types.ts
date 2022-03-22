import { ResponseState } from "~/store/types"

export type PokemonsPayload = {
    page: number,
}

export type FavoritesPayload = {
    page: number,
}

export type PokemonPayload = {
    name: string
}

export type AddOrRemoveFavoritePayload = {
    id: number
}

export type Response<D> = {
    data: D,
    ok: boolean
}

export type PokemonResult = {
    id: number,
    name: string,
    image_url: string,
    is_favorited: boolean,
    bg_color: string,
    bg_color_rgb: [number, number, number],
    types: Array<{
        slot: number,
        type: Array<{
            name: string,
            url: string
        }>
    }>,
    stats: Array<{
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }>,
}

export type PokemonsResponse = {
    count: number,
    next: string | null,
    previous: string | null
    results: PokemonResult[]
}

export type PokemonResponse = {
    id: number,
    name: string,
    image_url: string,
    is_favorited: boolean,
    bg_color: string,
    bg_color_rgb: [number, number, number],
    types: Array<{
        slot: number,
        type: Array<{
            name: string,
            url: string
        }>
    }>,
    abilities: Array<{
        ability: {
            name: string,
            url: string
        },
        is_hidden: boolean,
        slot: number
    }>,
    about: {
        description: string,
        height: number,
        weight: number
    },
    stats: Array<{
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }>,
    images: Array<string>
}

export type AddOrRemoveFavoriteResponse = {
    id_pokemon: number,
    is_favorited: boolean
}

export type FavoritesResponse = {
    count: number,
    results: PokemonResult[]
}