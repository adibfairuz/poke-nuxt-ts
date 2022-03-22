<template>
    <div class="flex flex-wrap justify-between">
        <img width="105" height="105" v-for="image in data.images" :key="image" :src="image" />
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { PokemonResult } from '~/services/types'
export default Vue.extend({
    props: {
        data: Object as PropType<PokemonResult>
    },
})
</script>