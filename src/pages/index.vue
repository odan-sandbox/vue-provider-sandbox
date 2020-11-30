<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <Child @click="onClick" />
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Child from '../components/Child.vue'
import { installLoadingContext, useLoadingContext } from '../contexts/LoadingContextV3'

export default Vue.extend({
  components: {
    Child
  },
  setup () {
    installLoadingContext()
    const loadingState = useLoadingContext()
    const onClick = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      loadingState.isLoading = false
    }
    return {
      loadingState,
      onClick
    }
  }
})
</script>
