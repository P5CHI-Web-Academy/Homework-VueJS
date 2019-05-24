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
  </div>
</template>

<script>
import Questions from '../components/content/Questions'
import Comments from '../components/content/Comments'
import Answers from '../components/content/Answers'
export default {
  name: 'Home',
  components: { Questions, Comments, Answers }
}
</script>

<style scoped>
</style>
