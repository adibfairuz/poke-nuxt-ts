<template>
  <div class="grid grid-cols-2">
    <template>
      <card
        v-for="item in pokemonList"
        :key="item.name"
        :item="item"
        @onFavorite="onFavorite"
        @onDetail="onDetail"
        rightIcon="fa-heart"
      />
    </template>
    <template v-if="isLoading">
      <skeleton-card v-for="index in 10" :key="index" />
    </template>
    <div id="observer-id"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import {
  AddOrRemoveFavoriteResponse,
  PokemonResult,
  PokemonsResponse,
} from "~/services/types";
import { ResponseState } from "~/store/types";

interface State {
  pokemonList: PokemonResult[];
  isLoading: boolean;
  page: number;
  observer: IntersectionObserver | null;
}

export default Vue.extend({
  name: "pokemon-list",
  data(): State {
    return {
      pokemonList: [],
      isLoading: false,
      page: 1,
      observer: null,
    };
  },
  computed: {
    ...mapGetters("pokemon", ["pokemons"]),
  },
  methods: {
    ...mapActions("pokemon", ["getPokemons", "addOrRemoveFavorite"]),
    async onFavorite(item: PokemonResult) {
      const updateFavorite = (is_favorited: boolean) => {
        return this.pokemonList.map((pokemon) => {
          if (pokemon.id === item.id) {
            return {
              ...pokemon,
              is_favorited,
            };
          }
          return pokemon;
        });
      };
      try {
        this.pokemonList = updateFavorite(!item.is_favorited);
        const res = await (<Promise<ResponseState<AddOrRemoveFavoriteResponse>>>this.addOrRemoveFavorite({ id: item.id }));
        if (res.data?.is_favorited) {
          this.pokemonList = updateFavorite(true);
        } else {
          this.pokemonList = updateFavorite(false);
        }
      } catch {
        this.pokemonList = updateFavorite(item.is_favorited);
      }
    },
    onDetail(item: PokemonResult) {
      this.$router.push(`/${item.name}`);
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      const loadMoreOffset =
        entries[0].boundingClientRect.top -
        document.body.getBoundingClientRect().top;
      const pageOffset = window.pageYOffset + window.innerHeight;
      if (
        pageOffset > loadMoreOffset &&
        !this.isLoading &&
        this.pokemonList.length
      ) {
        this.page++;
      }
    });
    this.observer.observe(
      <HTMLDivElement>document.getElementById("observer-id")
    );
  },
  async fetch() {
    try {
      this.isLoading = true;
      const res = await (<Promise<ResponseState<PokemonsResponse>>>(
        this.getPokemons({ page: 1 })
      ));

      this.pokemonList = <PokemonResult[]>res.data?.results;
    } finally {
      this.isLoading = false;
    }
  },
  watch: {
    page: {
      async handler() {
        try {
          this.isLoading = true;
          const res = await (<Promise<ResponseState<PokemonsResponse>>>(
            this.getPokemons({ page: this.page })
          ));
          this.pokemonList.push(...(<PokemonResult[]>res.data?.results));
        } finally {
          this.isLoading = false;
        }
      },
    },
  },
});
</script>

<style>
</style>