<template>
    <div class="main-display">
        <LeftSide @intersect="intersect" :results="results" :total-results="total" @update-right="fetchTitleDetails"></LeftSide>
        <RightSide :selected-record="selectedRecord"></RightSide>
    </div>

</template>

<script>
import LeftSide from './UI/LeftSide.vue';
import RightSide from './UI/RightSide.vue';

export default {
    components: { 
        LeftSide,
        RightSide
    },

    props: {
    },
    data() {
        return {
            apiKey: '4ea78e5d',
            url: 'http://www.omdbapi.com/?apikey=',
            searchParam: '',
            image: '',
            title: '',
            results: new Array,
            selectedRecord: {},
            page: 1,
            finalUrl: ''
        }
    },
    computed : {
        searchTerm() {
            return this.$store.getters.searchTermValue;
        },
        allValuesFetched() {
            return this.$store.getters.allValuesFetched;
        }
    },
    methods: {
        showDetails() {
            if (!this.allValuesFetched) {
                this.finalUrl = this.url + this.apiKey + ('&s=' + this.searchTerm + '&page=' + this.page );
                this.axios.get(this.finalUrl).then((response) => {
                    if (response.data.Search) {
                        if (this.results.length === 0) {
                            this.results = response.data.Search;
                            this.total = response.data.totalResults;
                        } else {
                            this.results = [...this.results, ...response.data.Search];
                        }
                        this.page++;
                        this.showDetails();
                    } else {
                        this.allValuesFetched  = true;
                    }
                });
            } else {
                this.results = [];
                this.total = 0;
            }
            
        },
        fetchTitleDetails(id) {
            let url = this.url + this.apiKey + (id ? '&i=' + id : '');
            this.axios.get(url).then((response) => {
                if (response.data) {
                    this.selectedRecord = response.data;
                }
            })
        },
        intersect() {
            this.showDetails();
        },
    }
}
</script>

<style>
.main-display{
    display: flex;
    margin-right: 20px;
}
</style>