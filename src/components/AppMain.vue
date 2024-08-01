<script>
import { cards } from '../store'
export default {
    data() {
        return {
            cards
        }
    },

    emits: ['filter'],

    methods: {
        sendArche (){
            this.$emit('filter')
        }
    }
}
</script>
<template>
    <div class="bg-orange">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <select v-model="cards.archeStatus" class="form-select my-4" @change="sendArche()">
                        <option selected class="text-danger">Chose archetype</option>
                        <option v-for="arche in cards.archeArray" :value="arche">
                            {{ arche }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="container bg-white p-4">
                <div class="row">
                    <div class="col-12 bg-dark text-light">
                        <h2>Found {{ cards.cardsList.length }} card</h2>
                    </div>
                </div>
                <div class="row row-cols-5">
                    <div class="col" v-for="card in cards.cardsList">
                        <div class="card mb-3">
                            <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
                            <div class="card-body bg-orange text-center position-relative">
                              <h5 class="card-title fw-bold">{{ card.name }}</h5>
                              <p class="card-text position-absolute">{{ card.archetype }}</p>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables';
    .form-select {
        width: 200px;
    }
    .bg-orange {
        background-color: orange;
    }
    .bg-white {
        background-color: white;
    }
    .card-body {
        height: 150px;

        h5 {
            font-size: 15px;
        }
        p {
            bottom: 10px;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 13px;
        }
    }
</style>