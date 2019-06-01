<template>
  <v-toolbar class="toolbar">
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }">StackOverflow</router-link>
    </v-toolbar-title>

    <v-spacer />

    <div class="search">
      <v-text-field label="Search" solo @input="(q) => updateValue(q)" />
    </div>

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
import SearchResult from '@/components/SearchResult'
export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      getSearchPanelValue: 'searchPanel/getSearchPanelValue'
    })
  },
  methods: {
    ...mapActions({
      changeValue: 'searchPanel/mutateSearchPanelValue',
      fetchUsers: 'searchPanel/mutateUsersList',
      fetchQuestions: 'searchPanel/mutateQuestionsList',
      fetchTags: 'searchPanel/mutateTagsList'
    }),
    updateValue (q) {
      this.changeValue(q)
      this.fetchUsers(this.getSearchPanelValue)
      this.fetchQuestions(this.getSearchPanelValue)
      this.fetchTags(this.getSearchPanelValue)
    }
  }
}
</script>

<style  lang="scss">

  .v-toolbar__title > a {
    color: black;
    text-decoration: none;
  }
  .search {
    width: 650px
  }
</style>
