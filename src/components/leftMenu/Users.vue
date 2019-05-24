<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-list-group no-action>
    <template v-slot:activator="">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list-group>
</template>

<script>
export default {
  name: 'Users'
}
</script>
