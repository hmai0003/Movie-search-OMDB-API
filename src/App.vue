<template>    
    <div>
        <TopNav @pass-value="getSearch" @update-range-filter="updateRange" @update-type="updateType"/>
        <MainContent ref="result"/>
    </div>
</template>

<script>
import TopNav from './Components/UI/TopNav.vue';
import MainContent from './Components/MainContent';


export default {
    components: { 
        TopNav, 
        MainContent 
    },

    data() {
        return {
        }
    },

    methods: {
        getSearch() {
            this.$refs.result.showDetails();
        },
        updateRange() {
            this.$refs.result.updateRange();
        },
        updateType() {
            this.$refs.result.updateType();
        }
    }
}
</script>