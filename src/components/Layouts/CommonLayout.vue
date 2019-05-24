
<template>
  <div>
    <Header />

    <v-layout row wrap class="mt-4">

      <v-flex xs2>
        <LeftMenu />
      </v-flex>

      <v-flex xs8>
        <router-view />
      </v-flex>

      <v-flex xs2>
        <RightPart />
      </v-flex> 

    </v-layout>
  </div>
</template>

<script>
import Header from '@/components/Header'
import LeftMenu from '@/components/LeftMenu'
import RightPart from '@/components/LastUserWidget'

export default {
  name: 'CommonLayout',
  components: { LeftMenu, Header, RightPart }
}
</script>

<style scoped>
</style>
