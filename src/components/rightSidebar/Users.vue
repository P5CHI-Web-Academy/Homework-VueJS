<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <div class="user" v-for="user in users" :key="user.id">
      <v-avatar
        size="18px"
        style="margin-right: 5px"
      >
        <img
          :src="user.profile_image"
          alt="Avatar"
        >
      </v-avatar>
      <div>{{ user.display_name }}</div>
    </div>
  </div>
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

<style scoped>
  .user {
    display: flex;
  }
</style>
