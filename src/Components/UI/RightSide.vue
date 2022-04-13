<template>
    <section v-if="selectedRecord !== null" class="right-side">
        <p>{{selectedRecord.Title}}</p>
        <img v-if="selectedRecord.Poster" :src="selectedRecord.Poster" :alt="selectedRecord.Title" width="60" height="60">
        <p>{{selectedRecord.Year}}</p>
        <p>{{selectedRecord.Rated}}</p>
        <p>{{selectedRecord.Actors}}</p>
        <p>{{selectedRecord.Runtime}}</p>
        <p>{{selectedRecord.Plot}}</p>
        <p>{{selectedRecord.Genre}}</p>
        <div v-if="selectedRecord.Ratings && selectedRecord.Ratings.length > 0">
            <ul>
                <li v-for="(rating,index) in selectedRecord.Ratings" :key="index">
                    <p>
                        {{rating.Source}} - {{rating.Value}}
                    </p>
                </li>
            </ul>    
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

<style>
.right-side{
    width: 60%;
    overflow: hidden;
    margin-top: 20px;
    margin-left: 20px;
}
</style>