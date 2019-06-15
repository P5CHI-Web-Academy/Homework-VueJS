<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Search Results</h1>
        <br>
      </v-flex>
    </v-layout>
    <hr>

    <v-layout row>
      <v-flex>
        <v-card>
          <v-list three-line subheader>
            <div>{{ currentQuestionsResult }}</div>
            <div v-if="resultQuestionsList.length > 0">
              <v-subheader>Questions that contain "{{ query }}"</v-subheader>
              <div v-for="result in resultQuestionsList" :key="result.id">
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <router-link :to="{ name: 'question', params: { id: result.id } }">
                        <h3>{{ result.title }}</h3>
                      </router-link>
                    </v-list-tile-title>
                    <v-list-tile-sub-title>Question owner: {{ result.owner.display_name }}</v-list-tile-sub-title>
                    <div>Tags: {{ result.tags }}</div>
                  </v-list-tile-content>
                </v-list-tile>
                <hr>
              </div>
            </div>
          </v-list>

          <v-divider />

          <v-list subheader three-line>
            <div>{{ currentUsersResult }}</div>
            <div v-if="resultUsersList.length > 0">
              <v-subheader>Users that contain "{{ query }}"</v-subheader>
              <div v-for="result in resultUsersList" :key="result.id">
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <router-link :to="{ name: 'user', params: { id: result.id } }">
                        <h3>{{ result.display_name }}</h3>
                      </router-link>
                    </v-list-tile-title>
                    <v-list-tile-sub-title>User location: {{ result.location }}</v-list-tile-sub-title>
                    <div>Id: {{ result.id }}</div>
                  </v-list-tile-content>
                </v-list-tile>
                <hr>
              </div>
            </div>
          </v-list>

          <v-divider />

          <v-list subheader three-line>
            <div>{{ currentTagsResult }}</div>
            <div v-if="resultTagsList.length > 0">
              <v-subheader>Tags that contain "{{ query }}"</v-subheader>
              <div v-for="result in resultTagsList" :key="result.id">
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <h3>{{ result.name }}</h3>
                    </v-list-tile-title>
                    <v-list-tile-sub-title>Tag count: {{ result.count }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <hr>
              </div>
            </div>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
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
      resultQuestionsList: 'questions/getQuestionList',
      resultUsersList: 'users/getUsersSearchResults',
      resultTagsList: 'tags/getTagsList'
    }),
    currentQuestionsResult () {
      this.fetchQuestionsSearchResults({ q: this.query })
    },
    currentUsersResult () {
      this.fetchUsersSearchResults({ q: this.query })
    },
    currentTagsResult () {
      this.fetchTagsSearchResults({ q: this.query })
    }
  },
  methods: {
    ...mapActions({
      fetchQuestionsSearchResults: 'questions/fetch',
      fetchUsersSearchResults: 'users/fetchUserSearchResults',
      fetchTagsSearchResults: 'tags/fetch'
    })
  }
}
</script>
