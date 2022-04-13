import { createStore } from "vuex";

const store =  createStore({
    state() {
        return {
            apiKey: 'ae1703d5',
            movies: null,
            movie: {},
            searchTerm: '',
            allValuesFetched: false
        };
    },
    mutations: {
        updateSearchValue(state,payload) {
            state.searchTerm = payload;
            if (state.searchTerm === '') {
                state.allValuesFetched = true;
            } else {
                state.allValuesFetched = false;
            }
        },
        searchForValue() {

        }
    },
    actions: {
        updateSearchValue(context,payload) {
            context.commit('updateSearchValue',payload.value)
        }
    },
    getters: {
        searchTermValue(state) {
            return state.searchTerm;
        },
        allValuesFetched(state) {
            return state.allValuesFetched
        }
    }
});

export default store;