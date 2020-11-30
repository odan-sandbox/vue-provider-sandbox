import Vue from 'vue'

export type State = {
  isLoading: boolean;
}

// XXX: 露出する必要ないんだけど、index.vue で使うため
export const state: State = Vue.observable({
  isLoading: false
})

export const loadingContextKey = 'LoadingContext'
export const LoadingProvider = Vue.extend({
  name: 'LoadingProvider',
  provide: {
    [loadingContextKey]: state
  },
  render (h) {
    if (!this.$slots.default) {
      throw new Error('空で使わないで')
    }

    return h('dev', this.$slots.default)
  }
})
