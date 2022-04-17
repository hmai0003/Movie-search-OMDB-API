<template>
   <div class="top-nav">
        <search-bar  @send-search="getSearch"/>
        <div class="right-item">
            <p v-show="leftValue">{{leftValue}}</p>
            <div>
                <Slider v-model="value" :max="max" :min="min" tooltip-position="bottom" style="width:150px;" :tooltips="false" @update="updateValue(value)"></Slider>
            </div>
             <p v-show="rightValue">{{rightValue}}</p>
             <div>
                <input type="radio" id="allValues" name="typeFilter" value="any" v-model="type"/>
                <label for="allValues">Any</label>

                <input type="radio" id="movie" name="typeFilter" value="movie" v-model="type"/>
                <label for="movie">Movies</label>

                <input type="radio" id="series" name="typeFilter" value="series" v-model="type"/>
                <label for="series">Series</label>

                <input type="radio" id="episode" name="typeFilter" value="episode" v-model="type"/>
                <label for="episode">Episodes</label>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar';
import Slider from "@vueform/slider";

export default {
    components: {  
      SearchBar,
      Slider
     },

    props: {

    },
    data() {
        return {
            searchParam: '',
            value: [1970,2022],
            min: 1970,
            max: 2022,
            leftValue: 1970,
            rightValue: 2022,
            type: 'any'

        }
    },
    methods: {  
        getSearch() {
            this.$emit('pass-value');
        },
        updateValue(value) {
            this.leftValue = value[0];
            this.rightValue = value[1];
            this.$store.dispatch('updateRangeFilter',{left: this.leftValue, right: this.rightValue});
            this.$emit('updateRangeFilter',this.leftValue,this.rightValue);

        }
    },
    watch: {
        type(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.$store.dispatch('updateTypeFilter',{value: newVal})
                this.$emit('updateType',newVal);
            }
        }
    }
}
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style>
    .top-nav{
        display: flex;
        height: 30px;
        background-color: gray;
        align-items: center;
        justify-content: space-between;
    }
    .right-item{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 100px;
    }
</style>