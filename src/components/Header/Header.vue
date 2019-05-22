<template id="Header">
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar dense height="65px">
      <v-toolbar-title>Stack Overflow</v-toolbar-title>

      <v-spacer />

      <v-flex xs6 sm4 md5>
        <v-text-field label="Search" placeholder="Search..." solo />
      </v-flex>

      <v-spacer />

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>all_inbox</v-icon>
          </v-btn>
        </template>
        <span>Inbox messages</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>bar_chart</v-icon>
          </v-btn>
        </template>
        <span>Achievements</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>help</v-icon>
          </v-btn>
        </template>
        <span>Help Center</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>comment</v-icon>
          </v-btn>
        </template>
        <span>Exchange sites</span>
      </v-tooltip>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'Header'
}
</script>
