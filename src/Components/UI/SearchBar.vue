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
    methods: {
        updateSearchValue(event) {
            this.$store.dispatch('updateSearchValue',{value: event.target.value});
            this.$emit('send-search');
        }
    }
}
</script>

<style>
 .search-bar {
     display: flex;
 }
 input{
     border: none;
     margin-left: 5px;
     color: white;
     background-color: gray;
     
 }
</style>