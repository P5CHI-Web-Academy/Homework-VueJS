<template>
  <div>
    <div v-if="Object.keys(currentUser).length === 0">
      <h2>User not found</h2>
    </div>
    <div v-else>
      User: {{ id }}
      <hr>
      <div>
        {{currentUser}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
  }
}
</script>
