import { createStore } from "vuex";

const store =  createStore({
    state() {
        return {
            searchTerm: '',
            allValuesFetched: false,
            yearFrom: '1970',
            yearTo: '2022',
            type: 'any'
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
        }
    }
});

export default store;