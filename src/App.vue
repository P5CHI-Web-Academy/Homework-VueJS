<template>
  <div id="App">
    <Header />
    <LeftMenu />
    <QuestionsList />
  </div>
</template>

<script>
import Header from '@/components/Header'
import LeftMenu from '@/components/LeftMenu'
import QuestionsList from '@/components/QuestionsList'

export default {
  name: 'App',
  components: {
    Header,
    LeftMenu,
    QuestionsList
  }
}
</script>

<style>
  #App {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
</style>
