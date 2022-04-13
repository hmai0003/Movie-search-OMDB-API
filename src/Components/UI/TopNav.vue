<template>    
    <div class="top-nav">
        <search-bar  @send-search="getSearch"/>
    </div>
</template>

<script>
import SearchBar from './SearchBar';

export default {
    components: { SearchBar },

    props: {

    },
    data() {
        return {
            searchParam: ''
        }
    },
    methods: {  
        getSearch() {
            this.$emit('pass-value');
        }
    }
}
</script>

<style>
    .top-nav{
        display: flex;
        height: 30px;
        background-color: gray;
        align-items: center;
    }
</style>