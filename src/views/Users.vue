<template>
  <div>
    <h2>
      Users
    </h2>
    <div v-if="loading" class="text-xs-center mt-5">
      <Progress />
    </div>

    <div v-for="user in userList" v-else :key="user.id" style="display: inline-block">
      <Preview :user="user" />
    </div>
  </div>
</template>

<script>
import Preview from '../components/User/Preview'
import { fetchUsers } from '@/api/users'
import Progress from "../components/Progress";

export default {
  name: 'Users',
  components: {Progress, Preview },
  data () {
    return {
      userList: [],
      loading: true
    }
  },
  created () {
    fetchUsers({})
      .then(result => {
        this.userList = result.data
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
