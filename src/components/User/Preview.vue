<template>
  <v-tooltip top>
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
export default {
  name: 'Preview',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
