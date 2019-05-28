<template>
  <div>
    <div v-if="Object.keys(currentQuestion).length > 0">
      Question: {{ id }}
      <hr>
      <div>
        {{ currentQuestion }}
      </div>
    </div>
    <div v-else>
      <h2>Question not found</h2>
    </div>
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
      getById: 'questions/getById'
    }),
    currentQuestion () {
      return this.getById(+this.id) || {}
    }
  },
  async created() {
    if(!this.getById(+this.id)) {
      await this.fetchQuestion(`?id=${+this.id}`)
    }
  },
  methods: {
    ...mapActions({
      fetchQuestion: 'questions/fetch'
    })
  }
}
</script>
