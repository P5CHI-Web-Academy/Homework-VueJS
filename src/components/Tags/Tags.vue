<template>
  <div>
    <div v-for="tag in tagsList" :key="tag.id">
      <v-flex>{{ tag }}</v-flex>
      <hr>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Tags',
  computed: {
    ...mapGetters({
      tagsList: 'tags/getTagsList'
    })
  },
  created () {
    this.fetchTags()
  },
  methods: {
    ...mapActions({
      fetchTags: 'tags/fetch'
    })
  }
}
</script>
