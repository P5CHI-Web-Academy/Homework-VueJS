
<template>
  <div class="right-part">
    <Users />
  </div>
</template>

<script>
  import Users from "../rightSidebar/Users";

  export default {
    components: {
      Users
    }
  }
</script>

<style lang="scss" scoped>
  .right-part{
    margin:10px
  }
</style>
