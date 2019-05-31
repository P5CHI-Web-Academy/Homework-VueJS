<template>
  <v-toolbar class="toolbar">
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }">StackOverflow</router-link>
    </v-toolbar-title>

    <v-spacer />

    <v-card-text>
      <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="grey"
        hide-no-data
        hide-selected
        item-text="Title"
        item-value="Result"
        label="Search"
        placeholder="Start typing to Search"
        return-object
        solo
        clearable
      />
    </v-card-text>

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
export default {
  name: 'Header',
  data: () => ({
    titleLimit: 120,
    entriesQuestions: [],
    entriesUsers: [],
    entriesTags: [],
    isLoading: false,
    model: null,
    search: null
  }),
  computed: {
    fields () {
      if (!this.model) return []

      return Object.keys(this.model).map(key => {
        return {
          key,
          value: this.model[key] || 'n/a'
        }
      })
    },
    items () {
      return this.entriesQuestions.map(entry => {
        const Type = 'question'
        const Title = '[Q] ' + (
          entry.title.length > this.titleLimit
            ? entry.title.slice(0, this.titleLimit) + '...'
            : entry.title
        )

        return Object.assign({}, entry, { Type, Title })
      }).concat(
        this.entriesUsers.map(entry => {
          const Type = 'user'
          const Title = '[U] ' + (
            entry.display_name.length > this.titleLimit
              ? entry.display_name.slice(0, this.titleLimit) + '...'
              : entry.display_name
          )

          return Object.assign({}, entry, { Type, Title })
        })
      ).concat(
        this.entriesTags.map(entry => {
          const Type = 'tag'
          const Title = '[T] ' + (
            entry.name.length > this.titleLimit
              ? entry.name.slice(0, this.titleLimit) + '...'
              : entry.name
          )

          return Object.assign({}, entry, { Type, Title })
        })
      )
    }
  },

  watch: {
    model (val, oldval) {
      if (val === undefined) {
        return
      }

      this.$router.push({
        name: val.Type,
        params: val.Type === 'tag' ? { name: val.name } : { id: val.id }
      })
    },
    search (val) {
      // Items have already been loaded
      if (this.items.length > 0) return

      // Items have already been requested
      if (this.isLoading) return

      this.isLoading = true

      // Lazily load input items
      fetch('http://localhost:3001/questions?q=' + val)
        .then(res => res.json())
        .then(res => {
          this.entriesQuestions = res
        })
        .catch(err => {
        })
        .finally(() => (this.isLoading = false))

      // Lazily load input items
      fetch('http://localhost:3001/users?q=' + val)
        .then(res => res.json())
        .then(res => {
          this.entriesUsers = res
        })
        .catch(err => {
        })
        .finally(() => (this.isLoading = false))

      // Lazily load input items
      fetch('http://localhost:3001/tags?q=' + val)
        .then(res => res.json())
        .then(res => {
          this.entriesTags = res
        })
        .catch(err => {
        })
        .finally(() => (this.isLoading = false))
    }
  }
}
</script>

<style  lang="scss">
  .v-toolbar__title > a {
    color: black;
    text-decoration: none;
  }
</style>
