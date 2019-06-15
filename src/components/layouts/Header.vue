<template>
  <v-toolbar class="toolbar">
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }">StackOverflow</router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-text-field
      v-model="searchPanelValue"
      label="Search"
      solo
      @input="search"
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
import { eventBus } from '../../main.js'
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      searchPanelValue: ''
    }
  },
  created () {
    eventBus.$on('resetInput', () => {
      this.searchPanelValue = ''
    })
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/mutateUsersList',
      fetchQuestions: 'questions/mutateQuestionsList',
      fetchTags: 'tag/mutateTagsList'
    }),
    fetchQueries () {
      this.fetchUsers(this.searchPanelValue)
      this.fetchQuestions(this.searchPanelValue)
      this.fetchTags(this.searchPanelValue)
    },
    search () {
      this.fetchQueries()
      eventBus.$emit('inputChanged', this.searchPanelValue)
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
