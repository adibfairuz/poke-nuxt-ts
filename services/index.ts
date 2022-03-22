import {NuxtAxiosInstance} from '@nuxtjs/axios'
import pokemonService from './pokemon'

const services = ($axios: NuxtAxiosInstance) => ({
    pokemon: pokemonService($axios)
})

export type Services = ReturnType<typeof services>

export default services