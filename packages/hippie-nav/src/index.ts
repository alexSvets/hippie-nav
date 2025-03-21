import type { AppOptions } from '@/types'
import type { App, InjectionKey } from 'vue-demi'
import { install as compositionInstall, isVue2 } from 'vue-demi'
import PrivateHippieNav from './components/HippieNav.vue'

export const HippieNav = PrivateHippieNav

export const defaultOptions: AppOptions = {
  indexFields: {
    actions: ['name', 'aliases'],
    routes: ['path', 'name'],
  },
  resultsLimit: 7,
}

export const hippieNavOptions: InjectionKey<AppOptions> = Symbol('hippieNavOptions')

export function install(app: App, options = defaultOptions) {
  app.component('HippieNav', PrivateHippieNav)
  app.provide(hippieNavOptions, options)

  if (isVue2) {
    compositionInstall()
  }
}

export default { install }
