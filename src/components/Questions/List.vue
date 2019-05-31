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
    <div v-if="loading" class="text-xs-center mt-5">
      <Progress />
    </div>

    <div v-else>
      <div v-for="question in questions" :key="question.id">
        <v-container>
          <v-layout row wrap>
            <v-flex xs2>
              <div>
                <div class="d-block text-xs-center">
                  {{ question.score }}
                </div>
                <div class="d-block text-xs-center">
                  votes
                </div>
              </div>
              <div class="mt-5">
                <div class="d-block text-xs-center">
                  {{ question.answer_count }}
                </div>
                <div class="d-block text-xs-center">
                  answers
                </div>
              </div>
              <div class="mt-5 d-block text-xs-center">
                {{ question.view_count }} views
              </div>
            </v-flex>
            <v-flex xs10>
              <div class="title">
                <router-link :to="{name: 'question', params: {id: question.id}}">
                  {{ question.title }}
                </router-link>
              </div>

              <div class="mt-3">
                {{ question.shortBody }}
              </div>
            </v-flex>
          </v-layout>
        </v-container>

        <v-divider />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Progress from '../Progress'
export default {
  name: 'Home',
  components: { Progress },
  computed: {
    ...mapGetters({
      questions: 'questions/getList',
      loading: 'questions/getLoading'
    })
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'questions/fetch'
    })
  }
}
</script>
