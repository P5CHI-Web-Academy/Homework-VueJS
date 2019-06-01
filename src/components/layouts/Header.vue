<template>
  <v-toolbar class="toolbar">
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }">StackOverflow</router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-text-field label="Search" solo 
    @input="(e) => search(e)" 
    v-bind:value="getSearchPanelValue"
    />

    <v-spacer />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <v-icon>inbox</v-icon>
      </v-btn>

      <v-btn flat>
        <v-icon>help</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      getSearchPanelValue: 'search/getSearchPanelValue'
    })
  },
  methods: {
    ...mapActions({
      grabInput: 'search/mutateSearchPanelValue',
      fetchUsers: 'search/mutateUsersList',
      fetchQuestions: 'search/mutateQuestionsList',
      fetchTags: 'search/mutateTagsList'
    }),
    fetchQueries () {
      this.fetchUsers(this.getSearchPanelValue)
      this.fetchQuestions(this.getSearchPanelValue)
      this.fetchTags(this.getSearchPanelValue)
    },
    search (e) {
      this.grabInput(e)
      this.fetchQueries()
    }
  }
}
</script>

<style lang="scss">
  .v-toolbar__title > a {
    color: black;
    text-decoration: none;
  }
</style>
