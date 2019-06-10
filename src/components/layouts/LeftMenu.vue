<template>
  <v-navigation-drawer>
    <v-list dense class="pt-0">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link :to="{name: 'home'}">Home</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-content>
          <router-link :to="{name: 'tags'}">Tags</router-link>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link :to="{name: 'users'}">Users</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'LeftMenu'
}
</script>

<style scoped>
</style>
