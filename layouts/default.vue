<template>
    <div class="bg-gray-200">
        <div class="mobile-layout">
            <Nuxt />
            <bottom-tabs :data="data" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {pikachuSmallImage, pokemonBallSmallImage} from '~/assets/images'
export default Vue.extend({
    computed: {
        data(){
            return [
                {
                    url: '/',
                    name: 'Home',
                    icon: pikachuSmallImage
                },
                {
                    url: '/favorites',
                    name: 'Fav',
                    icon: pokemonBallSmallImage
                },
            ]
        }
    }
})
</script>
<style lang="scss" scoped>
    .mobile-layout{
        background: #fff;
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 500px;
        min-height: 100vh;
        padding-bottom: 68px;
        position: relative;
    }
</style>