<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Top Questions</h1>
      </v-flex>

      <v-flex xs6 class="text-xs-right">
        <v-btn color="info">Ask Question</v-btn>
      </v-flex>
    </v-layout>
    <hr>

    <TopQuestions />

  </div>
</template>

<script>
  import TopQuestions from '@/components/Questions/TopQuestions'

  export default {
    name: 'Home',
    components: {
      TopQuestions
    }

  }
</script>
