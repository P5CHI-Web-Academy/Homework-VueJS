<template>
  <div class="search" v-if="searchPanelValue">
    <v-layout>
      <v-flex>
        <v-card>
            <v-list-tile v-for="user in usersList" :key="user.id" avatar>
              <v-list-tile-avatar>
                <img :src="user.profile_image" alt="John">
              </v-list-tile-avatar>
              <router-link :to="{name: 'user', params: {id: user.id}}">
                <v-list-tile-content >
                  <v-list-tile-title v-html="user.display_name" @click="reset"></v-list-tile-title>
                </v-list-tile-content>
              </router-link>
            </v-list-tile>

          <v-list-tile v-for="question in questionsList" :key="question.id" avatar>
            <router-link :to="{name: 'question', params: {id: question.id}}">
              <v-list-tile-content>
                <v-list-tile-title>{{ question.title }}</v-list-tile-title>
              </v-list-tile-content>
            </router-link>
          </v-list-tile>

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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Search',
  computed: {
    ...mapGetters({
      usersList: 'search/getUsersList',
      questionsList: 'search/getQuestionsList',
      tagsList: 'search/getTagsList',
      searchPanelValue: 'search/getSearchPanelValue'
    })
  },
    methods: {
    ...mapActions({
    resetSearchValue: 'search/resetSearchValue'
  }),
    reset () {
      this.resetSearchValue();
    }
  }
}
</script>

<style scoped>
.search {
  z-index: 999;
  position: absolute;
  margin-left: auto;
  left: 50%;
  transform: translate(-50%, 6px);
}
.search:before {
    display: block;
    position: absolute;
    left: 50%;
    transform: translate(-50%);   
    content: "";
    width: 20px;
    height: 20px;
    background: #fff;
    z-index: 1000;
    top: -10px;
    border-top: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    border-radius: 3px;
}
</style>
