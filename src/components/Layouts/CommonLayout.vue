<template>
  <div>
    <v-layout column>
      <v-flex>
        <Header />     
      </v-flex>
      <v-flex>
        <SearchResult />
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-1">
      <v-flex xs2>
        <LeftMenu />
      </v-flex>

      <v-flex xs8 class="pa-5">
        <router-view />
      </v-flex>
      <v-flex xs2>
        <RightPart />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import LeftMenu from '@/components/layouts/LeftMenu'
import RightPart from '@/components/layouts/RightPart'
import SearchResult from '@/components/SearchResult'

export default {
  name: 'CommonLayout',
  components: { LeftMenu, Header, RightPart, SearchResult }
}
</script>

<style scoped>

</style>
