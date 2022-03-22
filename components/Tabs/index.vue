<template>
    <div class="container-tabs">
        <div class="tabs mt-12 flex justify-around">
            <button v-for="tab in tabs" :key="'tab'+tab.id" @click="onClickTab(tab.id)" :class="`uppercase px-3 py-2 font-medium ${activeTab === tab.id ? 'active' : ''}`">
                {{tab.name}}
            </button>
        </div>
        <div class="container mx-auto px-5 mt-8">
            <component v-if="!isLoading" :is="activeComponent()" :data="data" />
            <loader v-else />
        </div>
    </div>
</template>

<script lang="ts">
import Vue, { Component, PropType } from 'vue'
import Loader from './Loader/index.vue'

interface Tabs extends Array<{id: number, name: string, component: Component}>{}

export default Vue.extend({
    data(){
        return{
            activeTab: 1
        }
    },
    components: {
        Loader
    },
    props: {
        tabs: {
            type: Array as PropType<Tabs>,
            required: true
        },
        data: {},
        isLoading: {
            type: Boolean
        }
    },
    methods: {
        onClickTab(numberOfTab: number){
            this.activeTab = numberOfTab
        },
        activeComponent(){
            return this.tabs.find(item => item.id === this.activeTab)?.component
        }
    },
})
</script>

<style lang="scss" scoped>
    .tabs{
        .active{
            background: #4e4e4e;
            color: white;
            border-radius: 20px;
        }
    }
</style>