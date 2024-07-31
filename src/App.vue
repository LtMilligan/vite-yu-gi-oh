<script>
  import { cards } from './store.js'
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  import axios from 'axios'
  export default {
    components: {
      AppHeader,
      AppMain
    },
    created() {
      this.getCardsList()
    },
    methods: {
      getCardsList() {
        axios.get(cards.apiUrl).then((result) => {
          cards.cardsList = result.data.data
        })
      }
    },
    data() {
      return {
        cards,
      }
    }
  }
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
  @use './styles/generals.scss'
</style>
