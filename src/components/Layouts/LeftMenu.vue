<template>
  <v-navigation-drawer>
    <v-list dense class="pt-0">
      <router-link :to="{ name: 'home' }">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>
      <router-link :to="{ name: 'tags' }">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Tags</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>
      <router-link :to="{ name: 'users' }">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "LeftMenu"
};
</script>

<style scoped>
</style>
