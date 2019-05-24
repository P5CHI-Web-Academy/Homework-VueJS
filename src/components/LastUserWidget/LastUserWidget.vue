<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>

   <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>

    <v-list-tile v-else
      v-for="user in userList"
      :key="user.id"
      @click
    >
      <v-avatar class="mx-1"
        size="30px"
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      userList: 'user/getList',
      loading: 'user/getLoading'
    })
  },
  mounted () {
    this.fetchUsers()
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/fetch'
    })
  }
}
</script>