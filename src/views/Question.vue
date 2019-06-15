<template>
  <div>
    <div class="mb-2">
      <router-link :to="{name: 'home'}">Back to all questions</router-link>
    </div>
    <h3>{{ element.title }}</h3>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="element.body" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Question',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getById: 'questions/getById'
    }),
    element: function () {
      return this.getById(parseInt(this.id)) || {}
    }
  },
  created () {
    if (!this.getById(this.id)) {
      this.fetchQuestion({
        id: this.id
      })
    }
  },
  methods: {
    ...mapActions({
      fetchQuestion: 'questions/fetch'
    })
  }
}
</script>
