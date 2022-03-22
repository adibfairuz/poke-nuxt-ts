<template>
    <div class="card cursor-pointer flex flex-col justify-center items-center px-3 mx-3 py-5 my-3 rounded-md" :style="`background: rgb(${item.bg_color_rgb}, 0.4)`" @click="onDetail">
        <fa-icon :class="`favorite-icon ${item.is_favorited ? 'is_favorited' : ''}`" :icon="['fa-solid', rightIcon]" @click="onFavorite" />
        <img class="w-40 h-40" :src="item.image_url" />
        <div class="uppercase font-bold mt-3">{{item.name}}</div>
        <div>#00{{item.id}}</div>
        <div class="mt-3">
            <span v-for="(type, i) in item.types" :key="'type'+i" class="rounded-full bg-white px-3 py-1 mx-1 capitalize">{{type.type.name}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { PokemonResult } from '~/services/types'
export default Vue.extend({
    name: 'card',
    data(){
        return{
            cardColor: 'rgba(120, 109, 104, 0.5)'
        }
    },
    props: {
        item: {
            type: Object as PropType<PokemonResult>,
            required: true
        },
        rightIcon: {
            type: String,
            required: true
        }
    },
    methods: {
        onFavorite(e: Event){
            e.preventDefault()
            e.stopPropagation()
            this.$emit('onFavorite', this.item)
        },
        onDetail(){
            this.$emit('onDetail', this.item)
        }
    }
})
</script>

<style lang="scss" scoped>
    .card{
        position: relative;
        .favorite-icon{
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 24px;
            width: 24px;
            color: rgb(241, 243, 244);
            cursor: pointer;
            :hover{
                color: rgb(214, 214, 214);
            }
        }
        .is_favorited{
            color: rgb(185, 22, 70) !important;
            :hover{
                color: rgb(185, 22, 70, 0.4) !important;;
            }
        }
    }
</style>>