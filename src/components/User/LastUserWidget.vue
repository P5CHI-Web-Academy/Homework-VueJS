<template>
  <div>
    <p class="title text-lg-center">
      Users
    </p>
    <v-text-field
      label="Search"
      @input="(q)=>fetchUsers({q})"
    />
    <div v-if="loading" class="text-xs-center mt-5">
      <v-progress-circular
        :width="1"
        color="red"
        :size="70"
        indeterminate
      />
    </div>

    <v-tooltip v-for="user in userList" v-else :key="user.id" top>
      <template v-slot:activator="{ on }">
        <v-avatar class="d-inline-flex ma-2" color="indigo">
          <img
            :src="user.profile_image"
            alt="John"
            v-on="on"
          >
        </v-avatar>
      </template>

      <div>
        <p>{{ user.display_name }}</p>
        <p>Gold: {{ user.badge_counts.gold }}</p>
        <p>Silver: {{ user.badge_counts.silver }}</p>
        <p>Bronze: {{ user.badge_counts.bronze }}</p>
      </div>
    </v-tooltip>

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
  created () {
    this.fetchUsers({ _limit: 51 })
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/fetch'
    })
  }

}
</script>
