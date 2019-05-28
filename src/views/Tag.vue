<template>
  <div>
    <div v-if="loading" class="text-xs-center mt-5">
      <v-progress-circular
        :width="1"
        color="red"
        :size="70"
        indeterminate
      />
    </div>

    <div v-else>
      <h2>
        {{ element.name }}
      </h2>
      <h3>
        Count: {{ element.count }}
      </h3>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: "Tag",
    props: {
      name: {
        type: [String],
        required: true,
      }
    },
    computed: {
      ...mapGetters({
        getByName: 'tag/getByName',
        loading: 'tag/getLoading'
      }),
      element: function () {
        return this.getByName(this.name) || {name: 'N/A', count: 0}
      }
    }
  }
</script>
