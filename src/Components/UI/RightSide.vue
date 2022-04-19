<template>
    <section v-if="selectedRecord !== null" class="right-side" :class="{ 'border-left' : selectedRecord.Title}">
        <div class="top-content">
            <img v-if="selectedRecord.Poster" :src="selectedRecord.Poster" :alt="selectedRecord.Title" width="182" height="259">
            <div class="top-side">
                <div class="wishlist-button" v-if="selectedRecord.Title" @click="updateWatchlist">
                    <button v-if="!showAdded" class="button button5"><i class="far fa-bookmark"></i> Watchlist</button>
                    <button v-else class="button button5 added"><i class="fas fa-bookmark"></i> Watchlisted</button>
                </div>
                <div class="below-button">
                    <div class="title">
                    <p style="font-size: 40px; font-weight: bolder;">{{selectedRecord.Title}}</p>
                </div>
                <div class="top2">
                    <div class="rating" v-if="selectedRecord.Rated">
                        <p>{{selectedRecord.Rated}}</p>
                    </div>
                    <p style="color: gray;">{{selectedRecord.Year}}</p>
                    <p style="color: gray;">{{selectedRecord.Genre}}</p>
                    <p style="color: gray;">{{selectedRecord.Runtime}}</p>
                </div>
                <p>{{selectedRecord.Actors}}</p>
                </div>
            </div>
        </div>
        <div v-if="selectedRecord.Title">
            <hr>
        </div>

        <div class="mid-content">
            <p>{{selectedRecord.Plot}}</p>
        </div>
        <div v-if="selectedRecord.Title">
            <hr>
        </div>
        <div class="bottom-content">
            <div v-if="selectedRecord.Ratings && selectedRecord.Ratings.length > 0">
            <ul>
                <li v-for="(rating,index) in selectedRecord.Ratings" :key="index">
                    <div class="review">
                        <p> {{rating.Value}} </p>
                        <p> {{rating.Source}} </p>
                    </div>
                </li>
            </ul>    
        </div>
        </div>

    </section>
</template>

<script>

export default {
    props: {
        selectedRecord: {
            type: Object,
            default: null
        },
    },
    data() {
        return {
            showAdded: false
        }
    },
    methods: {
        updateWatchlist() {
            this.showAdded  ? this.showAdded = false : this.showAdded = true;
            if (this.showAdded) {
                this.$store.dispatch('addToWatchlist',this.selectedRecord);
            } else {
                this.$store.dispatch('removeFromWatchlist',this.selectedRecord);
            }
        }
    },
    watch: {
        selectedRecord(newVal) {
            var val = this.$store.getters.watchlistValue
            if (val.length > 0) {
                for (var i = 0; i < val.length; i++) {
                    if (newVal.imdbID === val[i].imdbID) {
                        this.showAdded = true;
                        break;
                    } else {
                        this.showAdded = false;
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
.right-side{  
    width: 70%;
    overflow: hidden;
    padding-top: 20px;
    padding-left: 20px;
}
.border-left {
    border-left: 1px solid #d8cbcb;;
}
ul {
    list-style: none;
    padding-left: 0rem;
    display: flex;
}
.button {
  color: white;
  padding: 6px;
  padding-left: 0px;
  padding-right: 10px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}
.button5 {
    background-color: white;
    color: black;
    border: 2px solid #555555;
}
.added {
    background-color: lightgreen;
}
img{
    border-radius: 3px;
    padding-right: 10px;
}
.mid-content{
    padding-right: 46rem;
}
.top-content{
    display: flex;
}
.top-side{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}
.top2{
    display: flex;
    column-gap: 1rem;
}
.title,.top2{
    padding-bottom: 1rem;
}
.rating{
    border: 1px solid;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 3px;
}
.bottom-content{
    display: flex;
}
li{
    display: flex;
    column-gap: 1rem;
    padding-left: 5rem;
    padding-right: 5rem;
}
.review p:nth-child(2) {
    font-size: 1.2rem;
}
.review{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.vertical {
    border-left: 1px solid gray;
    height: 200px;
    position:absolute;
    left: 50%;
}
ul li:not(:last-of-type) {
    border-right: 1px solid gray;       
}
i{
    padding:0px 10px;
}
button:hover {
    background-color: lightgray
}
</style>