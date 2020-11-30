import {
  reactive,
  provide,
  inject,
  InjectionKey
} from '@vue/composition-api'

export type State = {
  isLoading: boolean;
}

const state: State = reactive<State>({ isLoading: false })

export const loadingContextKey: InjectionKey<State> = Symbol('LoadingContextV3')

export function installLoadingContext () {
  provide(loadingContextKey, state)
}

export function useLoadingContext () {
  return inject(loadingContextKey, state)
}
