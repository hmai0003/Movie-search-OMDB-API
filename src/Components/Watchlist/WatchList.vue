<template>
    <div class="w-topnav">
        <TopNav usedFrom="watchlist"></TopNav>
    </div>
    <div class="watchlist-content">
        <div class="w-head">
            <h1>Watchlist</h1>    
        </div>
        <div class="w-body">
            <ul class="scrolli">
                <li v-for="(result,index) in watchListData" :id="index" :key="result.imdbID">
                    <div class="custom-card">
                        <MDBCard style="width: 300px; height: auto; padding:10px; border: 1px solid black">
                            <MDBCardImg v-if="result.Poster !== 'N/A'"
                                :src="result.Poster" :alt="result.Title"
                            />
                            <MDBCardBody>
                                <MDBCardTitle style="font-size: 2rem; font-weight: bold;">{{result.Title}}</MDBCardTitle>
                                <MDBCardText>
                                    {{result.Plot}}
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import TopNav from '../UI/TopNav.vue';
    import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg } from "mdb-vue-ui-kit";
    export default {
        components: {
            TopNav,
            MDBCard,
            MDBCardBody,
            MDBCardTitle,
            MDBCardText,
            MDBCardImg
        },
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
.watchlist-content {
    align-items: center;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
}
</style>