<template>
  <div>
    <a href="">{{ tag.name }}</a> × {{ tag.count }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Tag',
  props: {
    count: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getByCount: 'tag/getByCount'
    }),
    tag: function () {
      return this.getByCount(parseInt(this.count)) || {}
    }
  },
  created () {
    if (!this.getByCount(parseInt(this.count))) {
      this.fetchTag({
        count: this.count
      })
    }
  },
  methods: {
    ...mapActions({
      fetchTag: 'tag/fetch'
    })
  }
}
</script>

<style scoped>
  a {
    background-color: #cee0ed;
    text-decoration: none;
    color: #005999;
    padding: .4em .5em;
    border-radius: 3px;
    border: 1px solid #cee0ed;
  }
</style>
