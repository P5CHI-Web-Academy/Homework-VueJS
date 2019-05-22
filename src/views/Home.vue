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

    <Questions />

  </div>
</template>

<script>
  // import httpClient from '@/plugins/axios'
  import Questions from '@/components/Questions/Questions'

  export default {
    name: 'Home',
    components: {
      Questions
    }
    // data () {
    //   return {
    //     questions: []
    //   }
    // },
    // created () {
    //   httpClient.get('/questions?_limit=10')
    //     .then(({ data }) => {
    //       this.questions = data
    //     })
    // }

  }
</script>
