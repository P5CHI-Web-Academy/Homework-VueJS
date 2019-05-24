<template>
  <div>
    <v-card v-for="question in questions" :key="question.id" class="item">
      <h3 class="headline mb-3">Question {{question.id}}</h3>
      <div v-html="question.body" />
      <hr>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      questions: 'question/getList'
    })
  },
  created () {
    this.fetchQuestions()
  },
  methods: {
    ...mapActions({
      fetchQuestions: 'question/fetch'
    })
  }
}
</script>

<style scoped>
  .item {
    margin-top: 20px;
  }
</style>