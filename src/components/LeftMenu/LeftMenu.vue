<template>
  <div id="LeftMenu">
    <v-flex xs2>
      <v-list light>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile disabled value>
          <v-list-tile-content>
            <v-list-tile-title>Public</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group value="expands">
          <template>
            <v-list-tile @click>
              <v-list-tile-action>
                <v-icon left medium>public</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Stack Overflow</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile @click>
            <v-list-tile-content>
              <v-list-tile-title>Tags</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click>
            <v-list-tile-content>
              <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click>
            <v-list-tile-content>
              <v-list-tile-title>Jobs</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-flex>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu'
}
</script>
