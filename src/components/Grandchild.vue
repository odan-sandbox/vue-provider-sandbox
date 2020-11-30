<template>
  <div>
    Grandchild
    <GreatGrandchild @click="onClick" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GreatGrandchild from './GreatGrandchild.vue'

export default Vue.extend({
  components: {
    GreatGrandchild
  },
  methods: {
    onClick (e: unknown) {
      this.$emit('click', e)
    }
  }
})
</script>
