import { reactive } from 'vue';

export const cards = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    apiArchetypes: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardsList: [],
    archeArray: [],
    archeStatus: ''
})