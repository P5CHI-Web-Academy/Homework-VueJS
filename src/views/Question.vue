<template>
  <div>
    <div v-if="Object.keys(currentQuestion).length > 0">
      <v-layout row wrap>
        <v-flex xs9>
          <div class="ml-3">
            <router-link :to="{ name: 'question', params: { id: currentQuestion.id } }">
              <h3>{{ currentQuestion.title }}</h3>
            </router-link>
          </div>
        </v-flex>

        <v-flex xs3 class="text-xs-right">
          <v-btn color="info">
            Ask Question
          </v-btn>
        </v-flex>
      </v-layout>
      <hr>

      <v-layout class="mx-3 my-3">
        <v-flex>
          <div>
            <v-btn flat class="text-lowercase caption stat-btn">
              {{ currentQuestion.score }}
              <br>
              Votes
            </v-btn>
          </div>
          <div v-if="currentQuestion.answer_count > 0">
            <v-btn flat outline color="teal" class="text-lowercase caption stat-btn">
              {{ currentQuestion.answer_count }}
              <br>
              Answers
            </v-btn>
          </div>
          <div v-else>
            <v-btn flat class="text-lowercase caption stat-btn">
              {{ currentQuestion.answer_count }}
              <br>
              Answers
            </v-btn>
          </div>
          <div>
            <v-btn flat class="text-lowercase caption stat-btn">
              {{ currentQuestion.view_count }}
              View
            </v-btn>
          </div>
        </v-flex>
        <v-flex>
          <div>
            {{ currentQuestion.body }}"
          </div>
          <br>
          <v-flex v-for="tag in currentQuestion.tags" :key="tag.id" d-inline-flex>
            <v-btn small light depressed color="#b8def2" class="text-lowercase caption indigo--text">
              {{ tag }}
            </v-btn>
          </v-flex>
        </v-flex>
      </v-layout>
    </div>
    <div v-else>
      <h2>Question not found</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getById: 'questions/getById'
    }),
    currentQuestion () {
      return this.getById(+this.id) || {}
    }
  },
  async created () {
    if (!this.getById(+this.id)) {
      await this.fetchQuestion(`?id=${+this.id}`)
    }
  },
  methods: {
    ...mapActions({
      fetchQuestion: 'questions/fetch'
    })
  }
}
</script>
