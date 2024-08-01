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
      this.getArchetypes()
    },
    methods: {
      getCardsList() {
        if (cards.archeStatus != '') {
          cards.apiUrl += `?archetype=${cards.archeStatus}`
        }
        axios.get(cards.apiUrl).then((result) => {
          cards.cardsList = result.data.data
        })
      },
      getArchetypes() {
        axios.get(cards.apiArchetypes).then((result) => {
          for (let i = 0; i < 10; i++) {
          let k = Math.floor(Math.random() * result.data.length + 1)
          cards.archeArray.push(result.data[k].archetype_name)
          }
        })
      },
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
  <AppMain @filter="getCardsList"/>
</template>

<style lang="scss">
  @use './styles/generals.scss'
</style>
