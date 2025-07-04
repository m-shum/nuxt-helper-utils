import { defineNuxtModule, addImportsDir, createResolver } from '@nuxt/kit'

// Module options TypeScript interface definition: use as defineNuxtModule<ModuleOptions>
// export interface ModuleOptions {}

export default defineNuxtModule({
  meta: {
    name: '@m-shum/nuxt-helper-utils',
    configKey: 'nuxtHelperUtils',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    addImportsDir(resolver.resolve('runtime/utils'))
  },
})
