<template>    
    <section class="left-side">
        <ul>
            <li v-for="result in results" :key="result.imdbID" @click="updateRightSide(result)">
                <img :src="result.Poster" :alt="result.Title" width="60" height="60">
                <p>{{result.Title}}</p>
                <p>{{result.Year}}</p>
            </li>
        </ul>
    </section>
    <section v-if="selectedRecord" class="right-side">
        <p>{{selectedRecord.Title}}</p>
    </section>
</template>

<script>
export default {
    props: {
        searchTerm: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            apiKey: '4ea78e5d',
            url: 'http://www.omdbapi.com/?apikey=',
            searchParam: '',
            image: '',
            title: '',
            results: new Array,
            selectedRecord: {}
        }
    },
    methods: {
        showDetails(val) {
            let url = this.url + this.apiKey + (val ? '&s=' + val : '');
            // this.axios.get(url).then((response) => {
            //     console.log(response.data)
            // })
            fetch(url)
            .then(data => {
                return data.json();
            })
            .then(post => {
                if (post.Search) {
                    this.results = post.Search;
                }
            });
        },
        updateRightSide(result) {
            this.selectedRecord = result;
            console.log(this.selectedRecord);
        }
    }
}
</script>
<style>
 .left-side{
     display: flex;
 }
 .right-side{
     display: flex;
 }
</style>