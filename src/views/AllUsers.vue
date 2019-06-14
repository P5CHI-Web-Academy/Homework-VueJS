<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Users</h1>
        <br>
      </v-flex>

      <v-flex xs6 class="text-xs-right" />

    </v-layout>

    <Users />
  </div>
</template>

<script>
import Users from '@/components/Users/Users'

export default {
  name: 'AllUsers',
  components: {
    Users
  }
}
</script>
