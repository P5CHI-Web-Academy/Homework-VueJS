<template>
  <div v-if="searchQuery" class="search">
    <v-layout>
      <v-flex>
        <v-card>
          <v-list-tile v-for="user in usersList" :key="user.id" avatar>
            <v-list-tile-avatar>
              <img :src="user.profile_image" alt="John">
            </v-list-tile-avatar>
            <router-link :to="{name: 'user', params: {id: user.id}}">
              <v-list-tile-content>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <v-list-tile-title @click="reset" v-html="user.display_name" />
              </v-list-tile-content>
            </router-link>
          </v-list-tile>

          <v-list-tile v-for="question in questionsList" :key="question.id" avatar>
            <router-link :to="{name: 'question', params: {id: question.id}}">
              <v-list-tile-content>
                <v-list-tile-title @click="reset">{{ question.title }}</v-list-tile-title>
              </v-list-tile-content>
            </router-link>
          </v-list-tile>

          <v-list-tile v-for="tag in tagsList" :key="tag.name" avatar>
            <router-link :to="{name: 'tag', params: {count: tag.count}}">
              <v-list-tile-content>
                <v-list-tile-title @click="reset">{{ tag.name }}</v-list-tile-title>
              </v-list-tile-content>
            </router-link>
          </v-list-tile>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'
import { mapGetters } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapGetters({
      usersList: 'user/getUsersList',
      questionsList: 'questions/getQuestionsList',
      tagsList: 'tag/getTagsList'
    })
  },
  created () {
    eventBus.$on('inputChanged', (input) => {
      this.searchQuery = input
    })
  },
  methods: {
    reset () {
      eventBus.$emit('resetInput')
      this.searchQuery = ''
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
