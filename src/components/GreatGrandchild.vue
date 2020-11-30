<template>
  <div>
    GreatGrandchild
    <v-btn :loading="loadingState.isLoading" @click="onClick">
      click
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { useLoadingContext } from '../contexts/LoadingContextV3'
export default Vue.extend({
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
