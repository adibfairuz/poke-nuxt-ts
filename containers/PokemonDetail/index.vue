<template>
  <div>
    <div v-if="pokemon.ok" class="detail">
      <div
        class="top"
        :style="`background-color: rgba(${
          pokemon.isLoading ? '241,241,241' : pokemon.data.bg_color_rgb
        }, 0.5)`"
      >
        <div class="icons flex justify-between px-6 py-8">
          <fa-icon
            :class="`icon arrow-left-icon`"
            :icon="['fa-solid', 'fa-arrow-left']"
            @click="goBack"
          />
          <fa-icon
            v-if="!pokemon.isLoading"
            :class="`icon favorite-icon ${
              pokemon.data.is_favorited ? 'is_favorited' : ''
            }`"
            :icon="['fa-solid', 'fa-heart']"
            @click="onFavorite"
          />
          <div v-else class="rounded-full bg-gray-200 h-6 w-6 img"></div>
        </div>
        <div
          v-if="!pokemon.isLoading"
          class="identity flex justify-between px-6 mt-6"
        >
          <div class="left">
            <div class="name uppercase font-bold text-3xl mb-4">
              {{ pokemon.data.name }}
            </div>
            <div class="types mt-3">
              <span
                v-for="(item, i) in pokemon.data.types"
                :key="'type-' + i"
                class="
                  rounded-full
                  font-medium
                  bg-white
                  px-3
                  py-1
                  mr-1
                  capitalize
                "
                >{{ item.type.name }}</span
              >
            </div>
          </div>
          <div class="right">
            <div class="id font-medium">#00{{ pokemon.data.id }}</div>
          </div>
        </div>
        <div v-else class="identity flex justify-between px-6 mt-6">
          <div class="left">
            <div class="animate-pulse flex flex-col items-center">
              <div class="h-5 w-48 mt-5 bg-gray-200 rounded"></div>
              <div class="h-5 w-48 mt-5 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div class="right">
            <div class="animate-pulse flex flex-col items-center">
              <div class="h-5 w-12 mt-5 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom bg-white">
        <div class="flex justify-center">
          <div
            v-if="pokemon.isLoading"
            class="rounded-full bg-gray-200 h-32 w-32 img"
          ></div>
          <img v-else class="img" :src="pokemon.data.image_url" />
        </div>
        <tabs
          :tabs="tabs"
          :data="pokemon.data"
          :isLoading="pokemon.isLoading"
        />
      </div>
    </div>
    <div v-if="pokemon.status === 404" class="flex flex-col items-center mt-12">
      <img :src="pokemonBallImage" width="288" height="288" />
      <span class="font-bold text-2xl">Pokemon Not Found</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import About from "./Tabs/About/index.vue";
import Abilities from "./Tabs/Ability/index.vue";
import Stats from "./Tabs/Stats/index.vue";
import Images from "./Tabs/Images/index.vue";
import { mapActions, mapGetters } from "vuex";
import { AddOrRemoveFavoriteResponse, PokemonResponse } from "~/services/types";
import { pokemonBallImage } from "~/assets/images";
import { ResponseState } from "~/store/types";
export default Vue.extend({
  data() {
    return {
      pokemonBallImage,
    };
  },
  computed: {
    ...mapGetters("pokemon", ["pokemon"]),
    tabs() {
      return [
        {
          id: 1,
          name: "about",
          component: About,
        },
        {
          id: 2,
          name: "stats",
          component: Stats,
        },
        {
          id: 3,
          name: "abilities",
          component: Abilities,
        },
        {
          id: 4,
          name: "images",
          component: Images,
        },
      ];
    },
  },
  methods: {
    ...mapActions("pokemon", ["getPokemon", "addOrRemoveFavorite"]),
    async onFavorite() {
      const data = await (<Promise<ResponseState<AddOrRemoveFavoriteResponse>>>(
        this.addOrRemoveFavorite({ id: this.pokemon.data.id })
      ));
    },
    goBack() {
      this.$router.back();
    },
  },
  async fetch() {
    const data = await (<Promise<ResponseState<PokemonResponse>>>(
      this.getPokemon({ name: this.$route.params.name })
    ));
  },
});
</script>

<style lang="scss" scoped>
.detail {
  .top {
    position: relative;
    min-height: 400px;
    z-index: 1;
    .icons {
      .icon {
        color: #4e4e4e;
        cursor: pointer;
        font-size: 24px;
        width: 24px;
      }
      .arrow-left-icon {
      }
      .favorite-icon {
        :hover {
          color: rgb(214, 214, 214);
        }
      }
      .is_favorited {
        color: rgb(185, 22, 70) !important;
        :hover {
          color: rgb(185, 22, 70, 0.4) !important;
        }
      }
    }
    .identity {
      color: #4e4e4e;
    }
  }
  .bottom {
    position: relative;
    top: -45px;
    border-radius: 30px;
    min-height: 300px;
    z-index: 2;
    .img {
      height: 190px;
      position: absolute;
      top: -140px;
      width: 190px;
    }
  }
}
</style>