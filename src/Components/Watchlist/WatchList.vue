<template>
    <div class="watchlist-content">
        <div class="w-head">
            <h1>Watchlist</h1>    
        </div>
        <div class="w-body">
            <ul class="scrolli">
                <li v-for="(result,index) in watchListData" :id="index" :key="result.imdbID">
                    <div class="custom-card">
                        <div class="image">
                            <img v-if="result.Poster !== 'N/A'" :src="result.Poster" :alt="result.Title" width="50" height="50">
                            <img v-else src="../../assets/video-movie-placeholder-image-grey.png" :alt="result.Title" width="50" height="50">
                        </div>
                        <div class="details">
                            <p>{{result.Title}}</p>
                            <p>{{result.Year}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.watchListData = this.$store.getters.watchlistValue;
        },
        data() {
            return {
                watchListData: []
            }
        }
    }
</script>

<style>
</style>