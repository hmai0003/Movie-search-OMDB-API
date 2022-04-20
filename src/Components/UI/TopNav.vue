<template>
   <div v-if="usedFrom === 'Main'" class="top-nav">
        <search-bar  @send-search="getSearch"/>
        <div class="right-item">
            <div class="slider-content">
                <p>YEAR</p>
                <div class="slider">
                    <p v-show="leftValue">{{leftValue}}</p>
                    <Slider class="slider-gray" v-model="value" :max="max" :min="min" tooltip-position="bottom" style="width:150px;" :tooltips="false" @update="updateValue(value)"></Slider>
                    <p v-show="rightValue">{{rightValue}}</p>
                </div>
            </div>   
             <div class="radio-content">
                 <p>TYPE</p>
                <div class="radios">
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
            <div class="watchlist-button">
                <router-link to="/watchlist">
                    <button class="button button5">Watchlist</button>
                </router-link>
            </div>
        </div>
    </div>
    <div v-else class="top-nav">
        <div class="home-button">
            <router-link to="/home">
                <button class="button button5">Home</button>
            </router-link>
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
        usedFrom: {
            type: String,
            default: 'Main'
        }
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
<style scoped>
    .top-nav,
    .right-item,
    .slider,
    .radios
    {
        display: flex;
        align-items: center;
    }
    .button {
        color: white;
        padding: 8px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        border-radius: 4px;
    }
    .button5 {
        background-color: gray;
        color: white;
        border: 2px solid white;
    }
    .button:hover {
        background-color: #9f9999;
    }
    .top-nav{
        padding: 1rem 2rem;
        background-color: gray;
        align-items: center;
        justify-content: space-between;
        font-size: 1.6rem;
    }
    .right-item{
        color: white;
        column-gap: 1rem;
        justify-content: flex-end;
        align-items: center;
        margin-right: 2rem;
        padding-bottom: 1rem;
    }
    .radio-content .slider-content{
        display: flex;
        font-size: 1.3rem;
    }
    .slider-content {
        padding-right: 2.5rem;
    }
    .radios{
        column-gap: 0.8rem;
    }
    .slider{
        column-gap: 2.4rem;
    }
    .slider-gray {
        --slider-connect-bg: #D3D3D3;
        --slider-handle-ring-color: gray;
    }
    input[type=radio] {
        width: 18px;
        height: 18px;
    }
    label, p{
        font-size: 1.3rem;
    }


</style>