<template>
  <v-navigation-drawer>
    <v-list dense class="pt-0">

      <v-list-tile @click="">
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link to="/" active-class="active">Home</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="">
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link to="/questions" active-class="active">Stack Overflow</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="">
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link to="/tags" active-class="active">Tags</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="">
        <v-list-tile-content>
          <v-list-tile-title>
            Users
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style <style lang="scss" scoped>

</style>
