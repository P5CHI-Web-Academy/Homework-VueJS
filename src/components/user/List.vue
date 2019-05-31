<template>
 <div>
   <div v-for="user in users">
     {{ user.display_name }}
   </div>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'List',
  computed: {
    ...mapGetters({
      users: 'user/getList',
      loading: 'user/getLoading'
    })
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'user/fetch'
    })
  }
}
</script>