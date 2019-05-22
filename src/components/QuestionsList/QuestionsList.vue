<template>
  <div id="QuestionsList">
  </div>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  name: 'QuestionsList',
  data () {
    return {
      userList: []
    }
  },
  created () {
    axios.get('/questions?_page=7&_limit=10').then(response => {
      this.userList = response.data
      console.log(response.data)
    })
  }
}
</script>
