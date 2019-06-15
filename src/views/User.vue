<template>
  <div>
    <div class="user">
      <v-avatar>
        <img :src="element[0].profile_image">
      </v-avatar>
      {{ /* eslint-disable-next-line */ }}
      <h2 v-html="element[0].display_name" />
    </div>
    {{ /* eslint-disable-next-line */ }}
    <p><b>Location</b>: <span v-html="element[0].location" /></p>
    {{ /* eslint-disable-next-line */ }}
    <p><b>Id</b>: <span v-html="element[0].id" /></p>
    {{ /* eslint-disable-next-line */ }}
    <p><b>Reputation</b>: <span v-html="element[0].reputation" /></p>
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
      getById: 'users/getById',
      list: 'users/getList'
    }),
    element () {
      return this.getById(parseInt(this.id))
    }
  },
  mounted () {
    this.fetchUser()
  },
  methods: {
    ...mapActions({
      fetchUser: 'users/fetch'
    })
  }
}
</script>

<style scoped>
.element-body {
  margin-top: 20px;
}
.user {
  display: flex;
  margin: 10px 10px;
}
h2 {
  margin: 10px 10px;
}
</style>
