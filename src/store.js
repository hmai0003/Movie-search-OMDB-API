import { createStore } from "vuex";

const store =  createStore({
    state() {
        return {
            allData: [],
            searchTerm: '',
            allValuesFetched: false,
            yearFrom: '1970',
            yearTo: '2022',
            type: 'any',
            watchlist: []
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
        updateAllFetched(state,payload) {
            state.allValuesFetched = payload;
        },
        updateRangeFilter(state, payload) {
            state.yearFrom = payload.left;
            state.yearTo = payload.right;
        },
        updateTypeFilter(state, payload) {
            state.type = payload;
        },
        addToWatchlist(state,payload) {
            state.watchlist.push(payload);
        },
        removeFromWatchlist(state,payload) {
            for (var i=0; i < state.watchlist.length; i++) {
                if (payload.imdbID === state.watchlist[i].imdbID) {
                    state.watchlist.splice(i,1);
                    break;
                }
            }
        }
    },
    actions: {
        updateSearchValue(context,payload) {
            context.commit('updateSearchValue',payload.value);
        },
        updateAllFetched(context,payload) {
            context.commit('updateAllFetched',payload.value);
        },
        updateRangeFilter(context, payload) {
            context.commit('updateRangeFilter', {left:payload.left, right:payload.right});
        },
        updateTypeFilter(context, payload) {
            context.commit('updateTypeFilter', payload.value);
        },
        addToWatchlist(context,payload) {
            context.commit('addToWatchlist', payload);
        },
        removeFromWatchlist(context,payload) {
            context.commit('removeFromWatchlist', payload);
        }
    },
    getters: {
        searchTermValue(state) {
            return state.searchTerm;
        },
        allValuesFetched(state) {
            return state.allValuesFetched;
        },
        yearFromValue(state) {
            return state.yearFrom;
        },
        yearToValue(state) {
            return state.yearTo;
        },
        typeValue(state) {
            return state.type;
        },
        watchlistValue(state) {
            return state.watchlist
        }
    }
});

export default store;