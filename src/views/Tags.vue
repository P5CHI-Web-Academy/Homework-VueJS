<template>
  <div>
    <div v-for="tag in tags" :key="tag.name" class="block">
      <div>{{ tag.name }}</div> x <div>{{ tag.count }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Tags',
  computed: {
    ...mapGetters({
      tags: 'tags/getList'
    })
  },
  created () {
    this.fetch()
  },
  methods: {
    ...mapActions({
      fetch: 'tags/fetch'
    })
  }
}
</script>

<style scoped>
.block {
  color:#eaeaea;
  display: inline-block;
  background-color: #0fabc7;
  margin: 5px 5px;
  padding: 10px 20px;
  border-radius: 3px;
}
.block > div {
    display: inline-block;
}
</style>
