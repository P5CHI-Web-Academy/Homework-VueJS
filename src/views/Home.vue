<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Questions</h1>
      </v-flex>

      <v-flex xs6 class="text-xs-right">
        <v-btn color="info">Ask Question</v-btn>
      </v-flex>
    </v-layout>
    <hr>

    <div v-for="question in questions" :key="question.id">
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
  import httpClient from '@/plugins/axios'

  export default {
    name: 'Home',
    data () {
      return {
        questions: []
      }
    },
    created () {
      httpClient.get('/questions?_limit=10')
        .then(({ data }) => {
          this.questions = data
        })
    }

  }
</script>
