import { PokemonState } from './pokemon'

export interface RootState {
    pokemon: PokemonState
}

export type ResponseState<T> = {
    isLoading: boolean,
    data: T | undefined,
    ok: boolean,
    status: number | undefined,
}