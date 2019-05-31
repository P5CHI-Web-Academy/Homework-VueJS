<template>
  <div>
    <h2>
      Users
    </h2>
    <div v-if="loading" class="text-xs-center mt-5">
      <Progress />
    </div>

    <div v-for="user in userList" v-else :key="user.id" style="display: inline-block">
      <Preview :user-id="user.id" />
    </div>
  </div>
</template>

<script>
import Preview from '../components/User/Preview'
import Progress from '../components/Progress'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Users',
  components: { Progress, Preview },
  computed: {
    ...mapGetters({
      userList: 'user/getList',
      loading: 'user/getLoading'
    })
  },
  created () {
    this.fetchUsers({})
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/fetch'
    })
  }
}
</script>
