
import components from './vuecode.vue'
const Vuecode = {
  install(Vue, options) {
    // console.log("options",options);
    // options.theme

    Vue.component('vuecode',components)

    Vue.prototype.$vcoptions = options
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuecode)
}
export default Vuecode
