<template>
  <div>
    <div v-if="error.statusCode === 404" class="flex flex-col items-center mt-12">
      <img :src="pokemonBallImage" width="288" height="288" />
      <span class="font-bold text-2xl">Page Not Found</span>
    </div>
  </div>
</template>

<script lang="ts">
import { pokemonBallImage } from '~/assets/images'
    import Vue from 'vue'
    export default Vue.extend({
        props: ['error'],
        layout: 'error',
        data(){
            return {
                pokemonBallImage
            }
        }
    })
</script>