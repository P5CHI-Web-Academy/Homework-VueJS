<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="headline text-lowercase">
        <span class="font-weight-light">stack</span>
        <span>overflow</span>
      </v-toolbar-title>

      <v-spacer>
        <v-text-field label="Search..." solo />
      </v-spacer>

      <v-toolbar-items>
        <v-btn icon>
          <v-icon>inbox</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>help</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>list</v-icon>
        </v-btn>
        <v-btn
          flat
          target="_blank"
        >
          <span class="mr-2">Log in</span>
        </v-btn>
        <v-btn
          flat
          target="_blank"
        >
          <span class="mr-2">Sign up</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
