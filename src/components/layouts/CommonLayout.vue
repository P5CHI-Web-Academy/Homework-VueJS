<template>
  <div>
    <Header />
    <Search />

    <v-layout row wrap class="mt-4">
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
import Search from '@/components/Search/Search'

export default {
  name: 'CommonLayout',
  components: { LeftMenu, Header, RightPart, Search }
}
</script>

<style scoped>
</style>
