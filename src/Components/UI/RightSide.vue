<template>
    <section v-if="selectedRecord !== null" class="right-side">
        <div class="top-content">
            <img v-if="selectedRecord.Poster" :src="selectedRecord.Poster" :alt="selectedRecord.Title" width="172" height="259">
            <div class="top-side">
                <div class="title">
                    <h1>{{selectedRecord.Title}}</h1>
                </div>
                <div class="top2">
                    <div class="rating">
                        <p>{{selectedRecord.Rated}}</p>
                    </div>
                    <p style="color: gray;">{{selectedRecord.Year}}</p>
                    <p style="color: gray;">{{selectedRecord.Genre}}</p>
                    <p style="color: gray;">{{selectedRecord.Runtime}}</p>
                </div>
                <p>{{selectedRecord.Actors}}</p>
            </div>
        </div>
        <hr>
        <div class="mid-content">
            <p>{{selectedRecord.Plot}}</p>
        </div>
        <hr>
        <div class="bottom-content">
            <div v-if="selectedRecord.Ratings && selectedRecord.Ratings.length > 0">
            <ul>
                <li v-for="(rating,index) in selectedRecord.Ratings" :key="index">
                    <div class="review">
                        <p> {{rating.Value}} </p>
                        <p> {{rating.Source}} </p>
                    </div>
                    <div class="vertical">
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
        }
    }
}
</script>

<style scoped>
.right-side{
    border-left: 1px solid #000;
    width: 70%;
    overflow: hidden;
    padding-top: 20px;
    padding-left: 20px;
}
ul {
    list-style: none;
    padding-left: 0rem;
    display: flex;
}
img{
    border-radius: 3px;
    padding-right: 10px;
}
.top-content{
    display: flex;
    align-items: center;
}
.top-side{
    padding-top: 15.9rem;
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
    padding-left: 50px;
    padding-right: 50px;
}
.review p:nth-child(2) {
    font-size: 1.2rem;
} 
.review{
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* .vertical {
            border-left: 1px solid gray;
            height: 200px;
            position:absolute;
            left: 50%;
        } */
</style>