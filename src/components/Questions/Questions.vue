<template>
  <div>
    <div v-for="question in questionList" :key="question.id">
      <v-layout>
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
          <div v-for="tag in question.tags">
            <v-btn small light color="blue">{{ tag }}</v-btn>
          </div>
        </v-flex>
      </v-layout>

      <hr/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Questions',
  computed: {
    ...mapGetters({
      questionList: 'questions/getQuestionList'
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
