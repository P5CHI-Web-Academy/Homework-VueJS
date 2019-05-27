<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Search Results</h1>
        <br>
      </v-flex>
    </v-layout>
    <hr>

    <div>
      <h2>Questions that contain "{{ query }}"</h2>
      <div>{{ currentQuestionsResult }}</div>
      <div v-for="result in resultQuestionsList" :key="result.id">
        <v-flex>
          <hr>
          {{ result }}
        </v-flex>
      </div>
    </div>
    <br>

    <div>
      <h2>Users that contain "{{ query }}"</h2>
      <div>{{ currentUsersResult }}</div>
      <div v-for="result in resultUsersList" :key="result.id">
        <v-flex>
          <hr>
          {{ result }}
        </v-flex>
      </div>
    </div>
    <br>

    <div>
      <h2>Tags that contain "{{ query }}"</h2>
      <div>{{ currentTagsResult }}</div>
      <div v-for="result in resultTagsList" :key="result.id">
        <v-flex>
          <hr>
          {{ result }}
        </v-flex>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AllSearchResults',
  props: {
    query: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      resultQuestionsList: 'results/getResultQuestionsList',
      resultUsersList: 'results/getResultUsersList',
      resultTagsList: 'results/getResultTagsList'
    }),
    currentQuestionsResult() {
      this.fetchQuestionsSearchResults(this.query)
    },
    currentUsersResult() {
      this.fetchUsersSearchResults(this.query)
    },
    currentTagsResult() {
      this.fetchTagsSearchResults(this.query)
    }
  },
  methods: {
    ...mapActions({
      fetchQuestionsSearchResults: 'results/fetchQuestions',
      fetchUsersSearchResults: 'results/fetchUsers',
      fetchTagsSearchResults: 'results/fetchTags'
    })
  }
}
</script>
