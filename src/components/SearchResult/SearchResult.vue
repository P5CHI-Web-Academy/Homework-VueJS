<template>
  <div class="search-result">
    <v-layout row>
      <v-flex>
        <v-card class="mx-auto" width="650">
          <v-list two-line subheader>
            <v-subheader inset>Users</v-subheader>

            <v-divider inset></v-divider>

            <v-list-tile v-for="user in usersList" :key="user.id" avatar>
              <v-list-tile-avatar>
                <img :src="user.profile_image" alt="John">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="user.display_name"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>
  
          <v-subheader inset>Questions</v-subheader>
            
          <v-divider inset></v-divider>
  
          <v-list-tile v-for="question in questionsList" :key="question.id" avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ question.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
            
          <v-divider inset></v-divider>
  
          <v-subheader inset>Tags</v-subheader>
            
          <v-divider inset></v-divider>
  
          <v-list-tile v-for="tag in tagsList" :key="tag.name" avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ tag.name }}</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile> 
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'SearchResult',
  computed: {
    ...mapGetters({
      usersList: 'searchPanel/getUsersList',
      questionsList: 'searchPanel/getQuestionsList',
      tagsList: 'searchPanel/getTagsList'
    })
  }
}
</script>

<style scoped>
.search-result {
  position: absolute;
  z-index: 999;
  top: 52px;
  left: calc(50% - 692px / 2);
}
</style>
