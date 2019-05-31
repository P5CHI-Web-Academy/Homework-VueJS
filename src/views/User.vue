<template>
  <div>
    <div v-if="loading" class="text-xs-center mt-5">
      <Progress />
    </div>

    <div v-else>
      <h2>
        <v-avatar class="d-inline-flex ma-2" color="indigo">
          <img
            :src="user.profile_image"
            alt="element.display_name"
          >
        </v-avatar>
        {{ user.display_name }}
      </h2>
      <h3>
        {{ user.location }}
      </h3>
      <h5>Reputation: {{ user.reputation }}</h5>
      <div>
        <p>Gold: {{ user.badge_counts.gold }}</p>
        <p>Silver: {{ user.badge_counts.silver }}</p>
        <p>Bronze: {{ user.badge_counts.bronze }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Progress from "../components/Progress";

export default {
  name: 'User',
  components: {Progress},
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getById: 'user/getById',
      loading: 'user/getLoading'
    }),
    user() {
      let element = this.getById(parseInt(this.id))
      if (!element) {
        this.fetchUsers({id: this.id})
      }

      return this.getById(parseInt(this.id)) || {
        profile_image: '',
        badge_counts: {
          gold: 0,
          silver: 0,
          bronze: 0
        }
      }
    }
  },
  methods: {
    ...mapActions({
      fetchUsers: 'user/fetch'
    })
  }
}
</script>
