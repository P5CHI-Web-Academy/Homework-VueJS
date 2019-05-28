<template>
  <v-navigation-drawer>
    <v-list dense class="pt-0">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link :to="{ name: 'home' }">
              Home
            </router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <Tags />

      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link :to="{name: 'users'}">
              Users
            </router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Tags from '../leftSidebar/Tags'
export default {
  name: 'LeftMenu',
  components: { Tags }
}
</script>

<style scoped>
</style>
