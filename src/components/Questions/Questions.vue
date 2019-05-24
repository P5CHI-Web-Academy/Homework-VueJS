<template>
  <div>
    <div v-if="loading" class="text-xs-center">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-else>
      <div v-for="question in questionList" :key="question.id">
      <v-layout class="mx-3 my-3">
        <v-flex>
          <div>
            <v-btn flat class="text-lowercase caption stat-btn">{{ question.score }} <br> Votes</v-btn>
          </div>
          <div v-if="question.answer_count > 0">
            <v-btn flat outline color="teal" class="text-lowercase caption stat-btn">{{ question.answer_count }} <br> Answers</v-btn>
          </div>
          <div v-else>
            <v-btn flat class="text-lowercase caption stat-btn">{{ question.answer_count }} <br> Answers</v-btn>
          </div>
          <div>
            <v-btn flat class="text-lowercase caption stat-btn">{{ question.view_count }} Views</v-btn>
          </div>
        </v-flex>
        <v-flex>
          <div v-html="question.body"></div>
          <br>
          <v-flex d-inline-flex v-for="tag in question.tags" :key="tag.id">
            <v-btn small light depressed color="#b8def2" class="text-lowercase caption indigo--text">{{ tag }}</v-btn>
          </v-flex>
        </v-flex>
      </v-layout>
      <hr/>
    </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Questions',
  computed: {
    ...mapGetters({
      questionList: 'questions/getQuestionList',
      loading: 'questions/getLoading'
    })
  },
  mounted () {
    this.fetchQuestions()
  },
  methods: {
    ...mapActions({
      fetchQuestions: 'questions/fetch'
    })
  }
}
</script>

<style lang="scss" scoped>
  .stat-btn:hover:before {
      background-color: transparent;
  }
</style>

