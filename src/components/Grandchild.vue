<template>
  <div>
    Grandchild
    <GreatGrandchild :loading="loadingState.isLoading" @click="onClick" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { useLoadingContext } from '../contexts/LoadingContextV3'
import GreatGrandchild from './GreatGrandchild.vue'

export default Vue.extend({
  components: {
    GreatGrandchild
  },
  setup (_, context) {
    const loadingState = useLoadingContext()
    const onClick = (e: unknown) => {
      loadingState.isLoading = true
      context.emit('click', e)
    }
    return {
      loadingState,
      onClick
    }
  }
})
</script>
