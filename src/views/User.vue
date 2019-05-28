<template>
  <div>
    <div v-if="Object.keys(currentUser).length > 0">
      User: {{ id }}
      <hr>
      <div>
        {{ currentUser }}
      </div>
    </div>
    <div v-else>
      <h2>User not found</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getById: 'users/getById'
    }),
    currentUser () {
      return this.getById(+this.id) || {}
    }
  },
  async created() {
    if(!this.getById(+this.id)) {
      await this.fetchUser(`?id=${+this.id}`)
    }
  },
  methods: {
    ...mapActions({
      fetchUser: 'users/fetch'
    })
  }
}
</script>
