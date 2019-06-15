<template>
  <v-tooltip v-if="!loading" top>
    <template v-slot:activator="{ on }">
      <router-link :to="{name: 'user', params: {id: user.id}}">
        <v-avatar class="d-inline-flex ma-2" color="indigo">
          <img
            :src="user.profile_image"
            :alt="user.display_name"
            v-on="on"
          >
        </v-avatar>
      </router-link>
    </template>

    <div>
      <p>{{ user.display_name }}</p>
      <p>Gold: {{ user.badge_counts.gold }}</p>
      <p>Silver: {{ user.badge_counts.silver }}</p>
      <p>Bronze: {{ user.badge_counts.bronze }}</p>
    </div>
  </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchUsers } from '@/api/users'

export default {
  name: 'Preview',
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      loading: false,
      user: null
    }
  },
  computed: {
    ...mapGetters({
      getById: 'user/getById'
    })
  },
  created () {
    let element = this.getById(this.userId)
    if (element === undefined) {
      this.loading = true
      fetchUsers({ id: this.userId })
        .then(result => {
          this.user = result.data[0]
        })
        .finally(() => {
          this.loading = false
        })
    } else {
      this.user = element
    }
  }
}
</script>

<style scoped>

</style>
