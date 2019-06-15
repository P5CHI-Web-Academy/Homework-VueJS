<template>
  <div>
    <div v-for="answer in answers" :key="answer.id">
      <div v-html="answer.body" />
      <hr>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Answers',
  computed: {
    ...mapGetters({
      answers: 'answer/getList'
    })
  },
  created () {
    this.fetchAnswers()
  },
  methods: {
    ...mapActions({
      fetchAnswers: 'answer/fetch'
    })
  }
}
</script>

<style scoped>
</style>
