<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="headline text-lowercase">
        <router-link :to="{ name: 'home' }">
          <span class="font-weight-light">stack</span>
          <span>overflow</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer>
        <v-text-field label="Search..." solo v-model="searchQuery" @keyup.enter="search"/>
      </v-spacer>

      <v-toolbar-items>
        <v-btn icon>
          <v-icon>inbox</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>help</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>list</v-icon>
        </v-btn>
        <v-btn
          flat
          target="_blank"
        >
          <span class="mr-2">Log in</span>
        </v-btn>
        <v-btn
          flat
          target="_blank"
        >
          <span class="mr-2">Sign up</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search() {
      this.$router.push({ path: '/search', query: { q: this.searchQuery } })
    }
  }
}
</script>

<style scoped lang="scss">
  .v-toolbar__title > a {
    color: black;
    text-decoration: none;
  }
</style>
