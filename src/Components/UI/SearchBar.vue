<template>    
    <div class="search-bar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        <input type="text" :placeholder="placeholder" name="q" @keyup="checkEmptySearch($event)" @keyup.enter="updateSearchValue($event)"/>
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
            this.$store.dispatch('searchForData');
        },
        checkEmptySearch(event) {
            if (event.target.value.length <= 0) {
                this.$store.dispatch('clearAll',event.target.value);
            }
        }
    }
}
</script>

<style>
 .search-bar {
     display: flex;
     align-items: center;
 }
 input{
     border: none;
     padding: 4px 8px;
     margin-left: 5px;
     color: white;
     background-color: gray;
     font-size: 2rem;
     
 }
 input:focus{
    outline: none;
 }
 input::placeholder{
     color: rgba(255, 255, 255,0.8);
 }
 svg{
     height: 2rem;
 }
</style>