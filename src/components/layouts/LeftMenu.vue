<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-navigation-drawer>
    <v-list dense class="pt-0">
      <v-list-tile @click="">
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <Tags />

      <Users />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import Users from '../leftSidebar/Users'
  import Tags from '../leftSidebar/Tags'

  export default {
  name: 'LeftMenu',
  components: { Users, Tags }
}
</script>

<style scoped>
</style>
