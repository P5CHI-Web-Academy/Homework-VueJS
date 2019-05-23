<template>
  <div>
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

          <v-flex xs4 v-for="tag in question.tags" :key="tag.id">
            <v-btn small light color="blue">{{ tag }}</v-btn>
          </v-flex>
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
