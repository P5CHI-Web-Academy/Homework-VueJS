<template>
  <div>
    <div v-if="loading" class="text-xs-center">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-else>
      <div v-for="user in userList" :key="user.id">
        <v-tooltip left>
          <template v-slot:activator="{ on }">
            <div v-on="on">
              <v-avatar size="36px" class="my-1 mx-1">
                <img
                  :src="user.profile_image"
                  alt="Avatar"
                >
              </v-avatar>
              {{ user.display_name }}
          </div>
          </template>
          <div>
            <span>Location: {{user.location}}</span>
          </div>
          <div>
            <span>Type: {{user.user_type}}</span>
          </div>
          <div>
            <span>Reputation: {{user.reputation}}</span>
          </div>

        </v-tooltip>

      </div>

    </div>
    <!-- {{ userList }} -->
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
  mounted () {
    this.fetchUsers()
  },
  methods: {
    ...mapActions({
      fetchUsers: 'users/fetch'
    })
  }
}
</script>
