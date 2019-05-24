<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Questions</h1>
      </v-flex>

      <v-flex xs6 class="text-xs-right">
        <v-btn color="info">
          Ask Question
        </v-btn>
      </v-flex>
    </v-layout>

    <Questions />

    <v-layout row wrap>
      <v-flex xs6>
        <h1>Answers</h1>
      </v-flex>
    </v-layout>

    <Answers />

    <v-layout row wrap>
      <v-flex xs6>
        <h1>Comments</h1>
      </v-flex>
    </v-layout>

    <Comments />
  </div>
</template>

<script>
import Questions from '../components/content/Questions'
import Answers from '../components/content/Answers'
import Comments from '../components/content/Comments'

export default {
  name: 'Home',
  components: { Questions, Answers, Comments }
}
</script>

<style scoped>
</style>
