<template>
    <ul>
        <li class="capitalize" v-for="(item, i) in data.abilities" :key="i">
            - {{item.ability.name}}
        </li>
    </ul>
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