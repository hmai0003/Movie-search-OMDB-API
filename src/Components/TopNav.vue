<template>    

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

</style>