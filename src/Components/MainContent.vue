<template>
    <TopNav @pass-value="showDetails" @update-range-filter="updateRange" @update-type="updateType"></TopNav>
    <div class="main-display">
        <LeftSide @intersect="intersect" :results="results" :total-results="total" @update-right="fetchTitleDetails"></LeftSide>
        <RightSide :selected-record="selectedRecord"></RightSide>
    </div>

</template>

<script>
import TopNav from './UI/TopNav.vue'
import LeftSide from './UI/LeftSide.vue';
import RightSide from './UI/RightSide.vue';

export default {
    components: { 
        TopNav,
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
            finalUrl: '',
            total: '',
            allFetched: false
        }
    },
    computed : {
        searchTerm() {
            return this.$store.getters.searchTermValue;
        },
        allValuesFetched() {
            return this.$store.getters.allValuesFetched;
        },
        fromDate() {
            return this.$store.getters.yearFromValue;
        },
        toDate() {
            return this.$store.getters.yearToValue;
        },
        typeValue() {
            return this.$store.getters.typeValue;
        }
    },
    methods: {
        showDetails(val,pageVal) {
            this.finalUrl = this.url + this.apiKey + ('&s=' + this.searchTerm + '&page=' + this.page);
            if (this.searchParam !== this.searchTerm) {
                this.searchParam = this.searchTerm;
                this.page = 1;
                this.results = [];
                this.total = '';
            }
            if (val) {
                this.page = pageVal;
                if (pageVal <= 1) {
                    this.results = [];
                }
                this.$store.dispatch('updateAllFetched',{value: false});
                this.finalUrl = this.url + this.apiKey + ('&s=' + this.searchTerm + '&page=' + this.page + '&type=' + this.typeValue);
            }
            if (!this.allValuesFetched) {
                this.axios.get(this.finalUrl).then((response) => {
                    if (response.data.Search) {
                        if (this.results.length === 0) {
                            this.results = response.data.Search;
                            this.total = response.data.totalResults;
                        } else {
                            this.results = [...this.results, ...response.data.Search];
                        }
                        this.page++;
                        if(val) {
                            this.showDetails(val,this.page);
                        } else {
                            this.showDetails();
                        }
                    } else {
                        this.$store.dispatch('updateAllFetched',{value: true});
                    }
                });
            } else {
                this.results = [];
                this.total = "0";
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
        updateRange() {
            var filteredResult = [];
            var yearValue;
            var toValue = parseInt(this.toDate);
            var fromValue = parseInt(this.fromDate);
            filteredResult = this.results.filter(result => {
                if (result.Year.includes('-') > -1) {
                    var splitValue = result.Year.split('-');
                    yearValue = parseInt(splitValue[0]);
                } else {

                    yearValue = parseInt(result.Year);
                }
                if (yearValue >= fromValue && yearValue <= toValue) {
                    return result
                }
            });
            this.results = filteredResult;
            this.total = this.results.length;
        },
        updateType() {
            this.showDetails(true,1);

            // filteredResult = this.results.filter(result => {
            //     if (result.Year.indexOf('-') > -1) {
            //         var splitValue = result.Year.split('-');
            //         yearValue = parseInt(splitValue[0]);
            //     } else {

            //         yearValue = parseInt(result.Year);
            //     }
            //     if (yearValue >= fromValue && yearValue <= toValue) {
            //         return result
            //     }
            // });
            // this.results = filteredResult;
            // this.total = this.results.length;
        }
    }
}
</script>

<style>
.main-display{
    font-size: 1.6rem;
    display: flex;
    max-height: 91vh;
}
</style>