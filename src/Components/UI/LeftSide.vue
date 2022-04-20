<template>
    <section class="left-side">
        <p class="total" v-if="totalResults > 0"> {{ totalResults }} Results </p>
        <ul class="scrolli">
            <li v-for="(result,index) in results" :id="index" :key="result.imdbID" @click="updateRightSide(result)">
                <div class="custom-card">
                    <div class="image">
                        <img v-if="result.Poster !== 'N/A'" :src="result.Poster" :alt="result.Title" width="50" height="50">
                        <img v-else src="../../assets/video-movie-placeholder-image-grey.png" :alt="result.Title" width="50" height="50">
                    </div>
                    <div class="details">
                        <p>{{result.Title}}</p>
                        <p>{{result.Year}}</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: {
        results: {
            type: Array,
            default: null
        },
        totalResults: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            selectedRecord: null,
            scrollUl: null
        }
    },
    methods: {
        updateRightSide(result) {
            this.$emit('update-right', result.imdbID)
        },
        attempt() {
            // this.$nextTick(() => {
            //     this.observer = new IntersectionObserver(([entry]) => {
            //         if (entry && !entry.isIntersecting) return
            //             this.$emit("intersect");
            //         });
                
            //     var abc = document.querySelector(".scrolli:last-child").children;
            //     var d = abc[(abc.length - 1)];
            //     this.observer.observe(d);
            // })
        }
    }
    // watch: {
    //     results(newVal) {
    //         if (newVal.length > 0) {
    //             this.attempt();
    //         }
    //     }
    // }
}
</script>

<style scoped>
.left-side{
    overflow: auto;
    position: relative; 
    width: 30%;
    max-height: 100vh;
}
.total{
    margin-top: 2rem;
    margin-bottom: 3rem;
    margin-left: 2rem;
    font-size: 1.3rem;
}
.custom-card{
    display: flex;
    border-bottom: 0.1rem solid #d8cbcb;
    padding-left: 2.5rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
    border-radius: 0rem;
}
.custom-card:hover{
    background-color: rgba(128, 128, 128, 0.2);
}
.image{
    padding-right: 1.3rem;
}
.details p:nth-child(2) {
    font-size: 1rem;
    color: gray;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent; 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


</style>