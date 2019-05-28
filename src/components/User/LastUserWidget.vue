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

    <div v-for="user in userList" v-else :key="user.id" style="display: inline-block">
      <Preview :user="user" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Preview from './Preview'

export default {
  name: 'LastUserWidget',
  components: { Preview },
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
