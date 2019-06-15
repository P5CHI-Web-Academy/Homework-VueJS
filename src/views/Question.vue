<template>
  <div>
    {{ /* eslint-disable-next-line */ }}
    <h2 v-html="element.title"></h2>
    <hr>
    {{ /* eslint-disable-next-line */ }}
    <div class="element-body" v-html="element.body"></div>
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
      getById: 'questions/getById',
      list: 'questions/getList'
    }),
    element () {
      return this.getById(this.id)
    }
  },
  methods: {
    ...mapActions({
      fetchQuestion: 'questions/fetch'
    })
  }
}
</script>

<style scoped>
  .element-body {
    margin-top: 20px;
  }
</style>
