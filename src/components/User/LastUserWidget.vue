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
      <Progress />
    </div>

    <div v-for="user in userList" v-else :key="user.id" style="display: inline-block">
      <Preview :user="user" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Preview from './Preview'
import Progress from "../Progress";

export default {
  name: 'LastUserWidget',
  components: {Progress, Preview },
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
