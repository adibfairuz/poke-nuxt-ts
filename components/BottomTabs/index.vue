<template>
    <div class="bottom-tabs-wrapper">
        <div class="bottom-tabs">
            <nuxt-link v-for="item in data" :key="item.url" :class="`tab ${$route.path === item.url ? 'active' : ''}`" :to="item.url">
                <img :src="item.icon" width="22" height="22" />
                <div class="pt-1 capitalize text-sm">{{item.name}}</div>
            </nuxt-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        data: Array
    },
})
</script>

<style lang="scss" scoped>
    .bottom-tabs-wrapper{
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 100;
    
    .bottom-tabs{
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
        max-width: 500px;
        box-shadow: 0px -1px 3px 0px rgba(0,0,0,0.15);
        padding: 8px 0;
        background: #fff;
        
        .tab{
            color: black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0.5;
            cursor: pointer;
            font-weight: 800;
        }

        .tab:hover{
            opacity: 1;
        }

        .active{
            opacity: 1;
            color: black;
        }
    }
}
</style>