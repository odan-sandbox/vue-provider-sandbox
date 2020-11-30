<template>
  <div>
    GreatGrandchild
    <v-btn :loading="loading" @click="onClick">
      click
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick (e: unknown) {
      this.$emit('click', e)
    }
  }
})
</script>
