<template>
  <div>
    <div v-for="tag in tags" :key="tag.name">
      {{ tag.name }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Tags',
  computed: {
    ...mapGetters({
      tags: 'tag/getList',
      loading: 'tag/getLoading'
    })
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'tag/fetch'
    })
  }
}
</script>
