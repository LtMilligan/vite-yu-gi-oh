<script>
export default {
    
}
</script>
<template>
    <div class="bg-orange">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <select class="form-select">
                        <option selected>Alien</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div class="container bg-white">
                <div class="row">
                    <div class="col-12 bg-dark text-light">
                        <h2>Found card</h2>
                    </div>
                </div>
                <div class="row row-cols-5">
                    <div class="col">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title"></h5>
                              <p class="card-text"></p>
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
</style>