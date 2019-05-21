<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
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
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
  computed: {
    ...mapGetters({
      users: 'user/getList'
    })
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/fetch'
    })
  }
}
</script>
