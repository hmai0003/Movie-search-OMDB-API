<template>    
    <div class="search-bar">
        <alert-icon />
        <input type="search" :placeholder="placeholder" name="q" @keyup="updateSearchValue($event)"/>
    </div>
</template>

<script>
export default {
    props: {
        placeholder : {
            type: String,
            default: 'Search...'
        }
    },
    data() {
        return {
            searchParam: ''
        }
    },
    methods: {
        updateSearchValue(event) {
            this.searchParam = event.target.value;
            this.$emit('send-search',this.searchParam);
        }
    }
}
</script>

<style>
 .search-bar {
     display: flex;
 }
 input  {
     border: none;
     padding-left: 5px;
 }
</style>