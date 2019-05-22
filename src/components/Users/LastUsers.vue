<template>
  <div>
    {{ userList }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userList: 'users/getUserList'
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
