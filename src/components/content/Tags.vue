

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      tags: 'tag/getList'
    })
  },
  created () {
    this.fetchTags()
  },
  methods: {
    ...mapActions({
      fetchTags: 'tag/fetch'
    })
  }
}
</script>
