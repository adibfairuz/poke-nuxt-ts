<template>
  <div>
    <div v-if="status === 404" class="flex flex-col items-center mt-12">
      <img :src="pokemonBallImage" width="288" height="288" />
      <span class="font-bold text-2xl">Pokemon Not Found</span>
    </div>
    <div class="grid grid-cols-2">
      <template>
        <card
          v-for="item in pokemonList"
          :key="item.name"
          :item="item"
          @onFavorite="handleUnFavorite"
          @onDetail="onDetail"
          rightIcon="fa-trash"
        />
      </template>
      <template v-if="isLoading">
        <skeleton-card v-for="index in 10" :key="index" />
      </template>
    </div>
    <div id="observer-id"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { pokemonBallImage } from "~/assets/images";
import {
  AddOrRemoveFavoriteResponse,
  FavoritesResponse,
  PokemonResult,
} from "~/services/types";

import { ResponseState } from "~/store/types";

interface State {
  pokemonList: PokemonResult[];
  isLoading: boolean;
  page: number;
  observer: IntersectionObserver | null;
  pokemonBallImage: string;
  status: number | undefined;
}

export default Vue.extend({
  name: "favorite-list",
  data(): State {
    return {
      pokemonList: [],
      isLoading: false,
      page: 1,
      observer: null,
      pokemonBallImage,
      status: undefined,
    };
  },
  computed: {
    ...mapGetters("pokemon", ["favorites"]),
  },
  methods: {
    ...mapActions("pokemon", ["getFavorites", "addOrRemoveFavorite"]),
    async handleUnFavorite(item: PokemonResult) {
      const prevData = JSON.parse(JSON.stringify(this.pokemonList));
      const updateFavorites = () => {
        return this.pokemonList.filter((pokemon) => {
          return pokemon.id !== item.id;
        });
      };
      try {
        this.pokemonList = updateFavorites();
        const data = await (<Promise<ResponseState<AddOrRemoveFavoriteResponse>>>this.addOrRemoveFavorite({ id: item.id }));
        if (data.data?.is_favorited) {
          this.pokemonList = prevData;
        }
      } catch {
        this.pokemonList = prevData;
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
      const data = await (<Promise<ResponseState<FavoritesResponse>>>(
        this.getFavorites({ page: 1 })
      ));
      this.pokemonList = <PokemonResult[]>data.data?.results;
    } catch (e) {
      const error = <ResponseState<FavoritesResponse>>e;
      this.status = error.status;
    } finally {
      this.isLoading = false;
    }
  },
  watch: {
    page: {
      async handler() {
        try {
          this.isLoading = true;
          const data = await (<Promise<ResponseState<FavoritesResponse>>>(
            this.getFavorites({ page: this.page })
          ));
          this.pokemonList.push(...(<PokemonResult[]>data.data?.results));
        } catch {
          this.observer?.disconnect();
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