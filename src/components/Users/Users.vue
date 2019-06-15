<template>
  <div>
    <v-flex xs3>
      <v-text-field
        placeholder="Filter by user"
        solo
        @input="(q)=>fetchUsers({ q, '_limit': 20 })"
      />
    </v-flex>

    <v-layout row wrap class="ml-2">
      <v-flex v-for="user in userList" :key="user.id" xs3>
        <v-flex>
          <v-divider light />
          <v-card class="mt-3" color="transparent" flat>
            <v-layout>
              <v-flex xs3>
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
              <v-flex xs12>
                <v-card-title>
                  <div>
                    <div>
                      <router-link :to="{ name: 'user', params: { id: user.id } }">
                        {{ user.display_name }}
                      </router-link>
                    </div>
                    <div>Location: {{ user.location }}</div>
                    <div>Reputation: {{ user.reputation }}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
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
    this.fetchUsers({ '_limit': 20 })
  },
  methods: {
    ...mapActions({
      fetchUsers: 'users/fetch'
    })
  }
}
</script>
