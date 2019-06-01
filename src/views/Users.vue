<template>
  <div>
    <div v-for="user in users" :key="user.id">
      <router-link :to="{name:'user', params: { id: user.id }}">
        <div class="user">
          <v-avatar>
            <img :src="user.profile_image">
          </v-avatar>
          <h2 v-html="user.display_name"></h2>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Users",
  computed: {
    ...mapGetters({
      users: "users/getList"
    })
  },
  created() {
    this.fetch();
  },
  methods: {
    ...mapActions({
      fetch: "users/fetch"
    })
  }
};
</script>

<style scoped>
.user {
  display: flex;
  margin: 10px 10px;
}
h2 {
  margin-left: 10px;
}
</style>
