<template>
    <MDBNavbar class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <form class="d-flex input-group w-auto">
      <input
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fas fa-search"></i>
      </span>
    </form>
  </div>
</MDBNavbar>    
    <!-- <div class="top-nav">
        <search-bar  @send-search="getSearch"/>
    </div> -->
</template>

<script>
// import SearchBar from './SearchBar';
import { MDBNavbar} from 'mdb-vue-ui-kit';

export default {
    components: { MDBNavbar
     },

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