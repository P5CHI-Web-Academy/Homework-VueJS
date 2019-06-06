<template>
  <div class="search-result">
    <v-layout row>
      <v-flex>
        <v-card v-if="searchPanelValue" class="mx-auto" width="650">
          <v-list two-line subheader>
            <v-subheader inset>
              Users
            </v-subheader>
            <v-divider inset />

            <v-list-tile
              v-for="user in usersList"
              :key="user.id"
              avatar
              @click.capture="resetSearchPanelValue"
            >
              <router-link :to="{ name: 'user', params: { id: user.id } }">
                <div class="inline">
                  <v-list-tile-avatar>
                    <img :src="user.profile_image" alt="John">
                  </v-list-tile-avatar>
                </div>

                <div class="inline">
                  {{ /* eslint-disable-next-line */ }}
                  <v-list-tile-title v-html="user.display_name" />
                </div>
              </router-link>
            </v-list-tile>

            <v-divider inset />
            <v-subheader inset>
              Questions
            </v-subheader>'
            <v-divider inset />

            <v-list-tile v-for="question in questionsList" :key="question.id">
              <router-link :to="{ name: 'question', params: { id: question.id } }">
                <v-list-tile-title>{{ question.title }}</v-list-tile-title>
              </router-link>
            </v-list-tile>

            <v-divider inset />
            <v-subheader inset>
              Tags
            </v-subheader>
            <v-divider inset />

            <v-list-tile v-for="tag in tagsList" :key="tag.name">
              <v-list-tile-title>{{ tag.name }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SearchResult',
  computed: {
    ...mapGetters({
      searchPanelValue: 'searchPanel/getSearchPanelValue',
      usersList: 'searchPanel/getUsersList',
      questionsList: 'searchPanel/getQuestionsList',
      tagsList: 'searchPanel/getTagsList'
    }),
    ...mapActions({
      changeSearchPanelValue: 'searchPanel/mutateSearchPanelValue',
      resetSearchPanelValue: 'searchPanel/resetSearchPanelValue'
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
.inline {
  display: inline-block;
}
</style>
