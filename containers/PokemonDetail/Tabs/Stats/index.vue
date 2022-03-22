<template>
    <div>
        <div class="flex flex-col mb-3" v-for="(stat, i) in data.stats" :key="i">
            <span class="uppercase">{{stat.stat.name}}</span>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div class="bg-gray-600 h-2.5 rounded-full" :style="`width: ${stat.base_stat}%`"></div>
            </div>
        </div>
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