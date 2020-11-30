<template>
  <div>
    Child
    <Grandchild @click="onClick" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Grandchild from './Grandchild.vue'

export default Vue.extend({
  components: {
    Grandchild
  },
  methods: {
    onClick (e: unknown) {
      this.$emit('click', e)
    }
  }
})
</script>
