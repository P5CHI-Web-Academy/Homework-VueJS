<template>
    <div>
      <h2>
        {{ element.title }}
      </h2>
      <div v-html="element.body" />
    </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

    export default {
      name: "Question",
      props: {
          id: {
            type: [Number, String],
            required: true,
          }
      },
      computed: {
        ...mapGetters({
          getById: 'questions/getById',
          list: 'questions/getList'
        }),
        element: function () {
          return this.getById(parseInt(this.id)) || {}
        }
      },
      methods: {
        ...mapActions({
          fetchQuestion: 'questions/fetch'
        })
      },
      async mounted() {
        if (!this.getById(this.id)) {
          this.fetchQuestion({
            id:this.id
          })
        }
      }
    }
</script>

<style scoped>

</style>
