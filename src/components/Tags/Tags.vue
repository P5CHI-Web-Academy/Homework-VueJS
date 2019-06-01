<template>
  <div>
    <h2 class="mb-2">
      Tag Cloud
    </h2>
    <div v-for="tag in tags" :key="tag.name" class="tag-container">
      <router-link :to="{name: 'tag', params: {count: tag.count}}">
        {{ tag.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Tags',
  computed: {
    ...mapGetters({
      tags: 'tag/getList',
      loading: 'tag/getLoading'
    })
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'tag/fetch'
    })
  }
}
</script>

<style scoped>
  .tag-container a {
    padding: 5px 15px;
    border: 3px solid #ccc;
    float: left;
    margin-left: -3px;
    margin-top: -3px;
    color: #666;
    transition: ease-in-out all 0.4s;
    text-decoration: none;
  }

  .tag-container a:hover {
    color: #e74c3c;
    border: 3px solid #e74c3c;
    position: relative;
    z-index: 2
  }
</style>
