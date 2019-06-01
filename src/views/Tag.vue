<template>
  <div>
    {{ tag }}
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  props: {
    count: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getByCount: 'tag/getByCount',
    }),
    tag: function () {
      return this.getByCount(parseInt(this.count)) || {}
    }
  },
  methods: {
    ...mapActions({
      fetchTag: 'tag/fetch'
    })
  },
  async mounted() {
    if (!this.getByCount(parseInt(this.count))) {
      this.fetchTag({
        count:this.count
      })
    }
  }
}
</script>
