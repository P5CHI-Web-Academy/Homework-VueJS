<template>
  <div>
    <div class="mb-2">
      <router-link :to="{name: 'home'}">Home</router-link>
    </div>
    <v-layout align-center mb-3>
      <v-avatar color="grey" class="mr-3">
        <img
          :src="user.profile_image"
          alt="John"
        >
      </v-avatar>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <strong class="title" v-html="user.display_name" />
      <v-spacer />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h4 v-html="user.location" />
    </v-layout>
    <p>Reputation: {{ user.reputation }}</p>
    <p>Bronze: {{ user.badge_counts.bronze }}</p>
    <p>Silver: {{ user.badge_counts.silver }}</p>
    <p>Gold: {{ user.badge_counts.gold }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'User',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getProfile: 'profile/getProfile'
    }),
    user () {
      return this.getProfile(parseInt(this.id)) || {}
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    ...mapActions({
      fetchUser: 'profile/fetch'
    })
  }
}
</script>
