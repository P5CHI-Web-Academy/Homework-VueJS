<template>
  <div>
    <Header />

    <v-layout row wrap class="mt-4">
      <v-flex xs2>
        <SideMenu />
      </v-flex>

      <v-flex xs10>
        <router-view />
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import SideMenu from '@/components/layouts/SideMenu'

export default {
  name: 'SecondLayout',
  components: {
    Header,
    SideMenu
  }
}
</script>
