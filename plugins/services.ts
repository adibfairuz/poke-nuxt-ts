import createServices, { Services } from '~/services'
import { Plugin } from '@nuxt/types'

declare module 'vuex' {
  interface Store<S> {
    $services: Services
  }
}

const services: Plugin = (ctx) => {
  ctx.store.$services = createServices(ctx.$axios)
}

export default services