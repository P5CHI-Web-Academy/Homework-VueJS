<template>
  <div>
    <div v-if="Object.keys(currentUser).length > 0">
      <hr>
      <v-layout row wrap class="mt-5">
        <v-flex xs3>
          <v-card class="mx-4">
            <div class="text-xs-center">
              <v-avatar
                tile
                size="150px"
                color="grey lighten-4"
                class="mt-4"
              >
                <img
                  :src="currentUser.profile_image"
                  alt="avatar"
                >
              </v-avatar>
            </div>

            <v-card-title>
              <div>
                <span class="headline">
                  {{ currentUser.reputation }}
                </span>
                <span class="grey--text text-uppercase ml-2">
                  reputation
                </span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn depressed small color="yellow lighten-4" class="p-0">
                {{ currentUser.badge_counts.gold }}
              </v-btn>
              <v-btn depressed small color="blue-grey lighten-4">
                {{ currentUser.badge_counts.silver }}
              </v-btn>
              <v-btn depressed small color="orange lighten-4">
                {{ currentUser.badge_counts.bronze }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <h2>{{ currentUser.display_name }}</h2>
          <div>{{ currentUser.website_url }}</div>
          <div>User Id: {{ currentUser.id }}</div>
        </v-flex>

        <v-flex xs3>
          <div>{{ currentUser.location }}</div>
          <div>{{ currentUser.user_type }}</div>
        </v-flex>
      </v-layout>
    </div>
    <div v-else>
      <h2>User not found</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getById: 'users/getById'
    }),
    currentUser () {
      return this.getById(+this.id) || {}
    }
  },
  async created () {
    if (!this.getById(+this.id)) {
      await this.fetchUser({ id: +this.id })
    }
  },
  methods: {
    ...mapActions({
      fetchUser: 'users/fetch'
    })
  }
}
</script>

<style lang="scss" scoped>
  .v-btn {
    min-width: 0;
  }

  .v-btn {
    padding: 0 20px;
  }
</style>
