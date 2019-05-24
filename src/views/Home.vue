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

    <QuestionsList />
  </div>
</template>

<script>
import QuestionsList from '@/components/QuestionsList'

export default {
  name: 'Home',
  components: { QuestionsList }
}
</script>

<style scoped>
</style>