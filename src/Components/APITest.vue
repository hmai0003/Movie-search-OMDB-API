<template>    
    <div>
        <search-bar @send-search="updateSearch"></search-bar>
    </div>
    <section>
        <p v-if="title">{{title}}</p>
        <img v-if="image" :src="image" width="500" height="600">
    </section>
</template>

<script>
import SearchBar from './SearchBar.vue';
export default {
  components: { SearchBar }, 
    data() {
        return {
            apiKey: '4ea78e5d',
            url: 'http://www.omdbapi.com/?apikey=',
            searchParam: '',
            image: '',
            title: ''
        }
    },
    methods: {
        showDetails() {
            let url = this.url + this.apiKey + (this.searchParam ? '&t=' + this.searchParam : '');
            fetch(url)
            .then(data => {
                return data.json();
            })
            .then(post => {
                if (post) {
                    this.image = post.Poster;
                    this.title = post.Title
                }
                console.log(post.Title);
            });
        },
        updateSearch(value) {
            this.searchParam = value;
            console.log(this.searchParam);
            this.showDetails();
        }
    }
}
</script>