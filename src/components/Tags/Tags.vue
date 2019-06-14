<template>
  <div>
    <v-flex xs3>
      <v-text-field
        placeholder="Filter by tag"
        solo
        @input="(q)=>fetchTags({ q, '_limit': 20 })"
      />
    </v-flex>
    <v-layout row wrap class="ml-2">
      <v-flex v-for="tag in tagsList" :key="tag.name" xs3>
        <v-divider light />
        <v-card class="my-2" color="transparent" flat>
          <v-card-title>
            <v-btn small light depressed color="#b8def2" class="text-lowercase caption indigo--text">
              {{ tag.name }}
            </v-btn>
          </v-card-title>
          <div>Count: {{ tag.count }}</div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Tags',
  computed: {
    ...mapGetters({
      tagsList: 'tags/getTagsList'
    })
  },
  created () {
    this.fetchTags()
  },
  methods: {
    ...mapActions({
      fetchTags: 'tags/fetch'
    })
  }
}
</script>
