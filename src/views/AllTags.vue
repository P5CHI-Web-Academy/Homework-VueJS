<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Tags</h1>
        <br>
      </v-flex>
      <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
    </v-layout>

    <Tags />
  </div>
</template>

<script>
import Tags from '@/components/Tags/Tags'

export default {
  name: 'AllTags',
  components: {
    Tags
  }
}
</script>
