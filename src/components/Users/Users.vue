<template>
  <div>
    <div v-for="user in userList" :key="user.id">
      <v-flex>
        <v-flex d-inline-flex>
          <v-avatar
            tile
            size="50px"
            color="grey lighten-4"
          >
            <img
              :src="user.profile_image"
              alt="avatar"
            >
          </v-avatar>
        </v-flex>

        <v-flex d-inline-flex>
          <div>
            <router-link :to="{name: 'user', params: {id: user.id}}">{{ user.display_name }}</router-link>
          </div>
          <div>{{ user.location }}</div>
          <div>{{ user.reputation }}</div>
        </v-flex>
      </v-flex>

    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userList: 'users/getUserList',
      loading: 'users/getLoading'
    })
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    ...mapActions({
      fetchUsers: 'users/fetch'
    })
  }
}
</script>
