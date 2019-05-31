<template>
  <div>
    <div v-for="comment in comments" :key="comment.id">
      <div v-html="comment.body" />
      <hr>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Comments',
  computed: {
    ...mapGetters({
      comments: 'comment/getList'
    })
  },
  created () {
    this.fetchComments({_limit: 5})
  },
  methods: {
    ...mapActions({
      fetchComments: 'comment/fetch'
    })
  }
}
</script>

<style scoped>
</style>
