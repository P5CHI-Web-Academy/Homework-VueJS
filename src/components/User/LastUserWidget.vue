<template>
  <div>
    <p class="title text-lg-center">
      Users
    </p>
    <v-text-field
      label="Search"
      @input="(q)=>fetchUsers({q, _limit: 51})"
    />
    <div v-if="loading" class="text-xs-center mt-5">
      <Progress />
    </div>

    <div v-for="user in userList" v-else :key="user.id" style="display: inline-block">
      <Preview :user_id="user.id" />
    </div>
  </div>
</template>

<script>
import { fetchUsers } from '@/api/users'
import Preview from './Preview'
import Progress from "../Progress";


export default {
  name: 'LastUserWidget',
  components: {Progress, Preview },
  data () {
    return {
      userList: [],
      loading: false
    }
  },
  created () {
    this.fetchUsers({_limit: 51})
  },
  methods: {
    fetchUsers: function (params) {
      this.loading = true;
      fetchUsers(params)
        .then(result => {
          this.userList = result.data
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
