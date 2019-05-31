<template>
  <div>
    <div v-if="loading" class="text-xs-center mt-5">
      <Progress />
    </div>

    <div v-else>
      <h2>
        <v-avatar class="d-inline-flex ma-2" color="indigo">
          <img
            :src="element.profile_image"
            alt="element.display_name"
          >
        </v-avatar>
        {{ element.display_name }}
      </h2>
      <h3>
        {{ element.location }}
      </h3>
      <h5>Reputation: {{ element.reputation }}</h5>
      <div>
        <p>Gold: {{ element.badge_counts.gold }}</p>
        <p>Silver: {{ element.badge_counts.silver }}</p>
        <p>Bronze: {{ element.badge_counts.bronze }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
    element: function () {
      return this.getById(parseInt(this.id)) || {
        badge_counts: {
          gold: 0,
          silver: 0,
          bronze: 0
        }
      }
    }
  }
}
</script>
