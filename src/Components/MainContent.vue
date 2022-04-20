<template>
    <TopNav @pass-value="showDetails" @update-range-filter="updateRange"></TopNav>
    <div class="main-display">
        <LeftSide @intersect="intersect" @update-right="fetchTitleDetails"></LeftSide>
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
            selectedRecord: {}
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
        },
        getResults() {
            return this.$store.getters.getAllData;
        }
    },
    methods: {
        showDetails() {
            this.$store.dispatch('searchForData');
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