<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <v-layout align-center mb-2>
        <v-avatar color="grey" class="mr-2" tile>
          <img
          :src="user.profile_image"
          alt="John"
          >
        </v-avatar>
        <router-link 
        :to="{name: 'user', params: {id: user.id}}" 
        v-html="user.display_name"
        >
        </router-link>
        <div class="ml-2" v-html="user.location"></div>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'List',
  computed: {
    ...mapGetters({
      users: 'user/getList',
      loading: 'user/getLoading'
    })
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'user/fetch'
    })
  }
}
</script>
