<template>
  <div>
    <Header />

    <v-layout row wrap class="mt-4">
      <v-flex xs2>
        <SideMenu />
      </v-flex>

      <v-flex xs8>
        <router-view />
      </v-flex>

      <v-flex xs2>
        <RightPanel />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import SideMenu from '@/components/layouts/SideMenu'
import RightPanel from '@/components/layouts/RightPanel'

export default {
  name: 'CommonLayout',
  components: {
    Header,
    SideMenu,
    RightPanel
  }
}
</script>
