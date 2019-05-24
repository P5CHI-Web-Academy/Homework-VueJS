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
            <v-btn flat>{{ question.score }}</v-btn>
            <span>Votes</span>
          </div>
          <div>
            <v-btn flat>{{ question.answer_count }}</v-btn>
            <span>Answers</span>
          </div>
          <div>
            <v-btn flat>{{ question.view_count }}</v-btn>
            <span>View</span>
          </div>
        </v-flex>
        <v-flex>
          <div v-html="question.body"></div>
          <br>
          <v-flex d-inline-flex xs4 v-for="tag in question.tags" :key="tag.id">
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
  name: 'TopQuestions',
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
