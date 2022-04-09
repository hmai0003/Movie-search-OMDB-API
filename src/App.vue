<template>    
    <div>
        <TopNav @pass-value="getSearch"/>
        <APITest ref="result" :search-term="searchTerm"/>
    </div>
</template>

<script>
import TopNav from './Components/TopNav.vue'
import APITest from './Components/APITest';


export default {
    components: { 
        TopNav, 
        APITest
    },

    data() {
        return {
            searchTerm: ''
        }
    },

    methods: {
        getSearch(value) {
            this.searchTerm = value;
            this.$refs.result.showDetails(this.searchTerm);
        }
    }
}
</script>