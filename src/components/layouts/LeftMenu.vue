<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-navigation-drawer>
    <v-list dense class="pt-0">
      <v-list-tile @click="">
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-group no-action>
        <template v-slot:activator="">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Tags</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile
          v-for="tag in tags"
          :key="tag.name"
          @click=""
        >
          <v-list-tile-content>
            <v-list-tile-title>{{ tag.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>

      <v-list-group no-action>
        <template v-slot:activator="">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

        <v-list-tile
          v-for="user in users"
          :key="user.id"
          @click=""
        >
          <v-avatar
            size="18px"
            style="margin-right: 5px"
          >
            <img
              :src="user.profile_image"
              alt="Avatar"
            >
          </v-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ user.display_name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import axios from '@/plugins/axios'

  export default {
    name: 'LeftMenu',
    data () {
      return {
        tags: [],
        users: [],
      }
    },
    created () {
      axios.get('/tags?_limit=5')
        .then(({ data }) => {
          this.tags = data
        })
      axios.get('/users?_limit=10')
        .then(({ data }) => {
          this.users = data
        })
    }
  }
</script>

<style scoped>
</style>
