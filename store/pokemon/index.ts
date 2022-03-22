import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { State } from './types';

const state = (): State => ({
    pokemons: {
      isLoading: false,
      ok: false,
      data: [],
      status: undefined
    },
    pokemon: {
      isLoading: false,
      ok: false,
      data: {},
      status: undefined
    },
    favorites: {
      isLoading: false,
      ok: false,
      data: [],
      status: undefined
    },
  });
  
  const pokemonModule = {
    state,
    getters,
    actions,
    mutations,
  };

  export type PokemonState = ReturnType<typeof state>
  
  export default pokemonModule;