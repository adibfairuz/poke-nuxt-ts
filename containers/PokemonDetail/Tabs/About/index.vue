<template>
    <div>
        <div class="mb-2">{{data.about.description}}</div>
        <div>
            <div>Weight: {{data.about.weight}} </div>
            <div>Height: {{data.about.height}} </div>
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