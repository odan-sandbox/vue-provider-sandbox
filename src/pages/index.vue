<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <LoadingProvider>
          <Child @click="onClick" />
        </LoadingProvider>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Child from '../components/Child.vue'
import { LoadingProvider, state } from '../contexts/LoadingContext'

export default Vue.extend({
  components: {
    Child,
    LoadingProvider
  },
  methods: {
    async onClick () {
      await new Promise(resolve => setTimeout(resolve, 1000))
      state.isLoading = false
    }
  }
})
</script>
