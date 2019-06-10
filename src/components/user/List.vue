<template>
  <div>
    <div v-if="loading" class="text-xs-center mt-5">
      <v-progress-circular
        :width="1"
        color="red"
        :size="70"
        indeterminate
      />
    </div>

    <div v-else>
      <h2 class="mb-3">
        All Users List
      </h2>
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
          >
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="user.display_name" />
          </router-link>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="ml-2" v-html="user.location" />
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'List',
  computed: {
    ...mapGetters({
      users: 'user/getAllList',
      loading: 'user/getLoading'
    })
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'user/fetchAll'
    })
  }
}
</script>
