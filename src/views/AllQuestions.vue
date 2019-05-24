<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>All Questions</h1>
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
  import Questions from '@/components/Questions/Questions'

  export default {
    name: 'AllQuestions',
    components: {
      Questions
    }

  }
</script>
