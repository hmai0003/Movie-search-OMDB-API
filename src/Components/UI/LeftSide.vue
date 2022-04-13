<template>
    <section class="left-side">
        <p class="total" v-if="totalResults > 0"> {{ totalResults }} Results </p>
        <ul class="scrolli">
            <li v-for="(result,index) in results" :id="index" :key="result.imdbID" @click="updateRightSide(result)">
                <div class="card">
                    <img :src="result.Poster" :alt="result.Title" width="60" height="60">
                    <p>{{result.Title}}</p>
                    <p>{{result.Year}}</p>
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
    width: 40%;
    max-height: 100vh;
}
.total{
    margin-top: 20px;
    margin-bottom: 50px;
    margin-left: 20px;
}
.card{
    border-bottom: 1px solid gray;
    padding-left: 20px;
    padding-bottom: 20px;
    padding-top: 20px;
}
</style>