<template>
  <div>
    Grandchild
    <GreatGrandchild :loading="LoadingContext.isLoading" @click="onClick" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { loadingContextKey } from '../contexts/LoadingContext'
import GreatGrandchild from './GreatGrandchild.vue'

export default Vue.extend({
  inject: [loadingContextKey],
  components: {
    GreatGrandchild
  },
  methods: {
    onClick (e: unknown) {
      (this as any).LoadingContext.isLoading = true
      this.$emit('click', e)
    }
  }
})
</script>
