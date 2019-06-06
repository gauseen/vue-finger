import AlloyFinger from 'alloyfinger'
import { validFuns, err } from './utils'

const vueFinger = {
  bind (el, binding, vnode) {
    const { value: callback, arg } = binding

    if (!validFuns.includes(arg)) err(`${arg} gesture method is not supported`)
    if (typeof callback !== 'function') err('The v-fg directive value should be a function')

    new AlloyFinger(el, { // eslint-disable-line
      [arg]: callback
    })
  }
}

export default {
  install (Vue, options) {
    Vue.directive('fg', vueFinger)
  }
}
