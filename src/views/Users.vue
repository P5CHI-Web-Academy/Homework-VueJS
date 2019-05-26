<template>
  <div>
    <h2>
      Users
    </h2>
    <div v-if="loading" class="text-xs-center mt-5">
      <v-progress-circular
        :width="1"
        color="red"
        :size="70"
        indeterminate
      />
    </div>

    <div v-for="user in userList" v-else :key="user.id" style="display: inline-block">
      <Preview :user="user" />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Preview from "../components/User/Preview";

  export default {
    name: 'Users',
    components: {Preview},
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
