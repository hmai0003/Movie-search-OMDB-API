import { createStore } from "vuex";
import axios from 'axios';

const store =  createStore({
    state() {
        return {
            allData: [],
            filteredData: [],
            searchTerm: '',
            allValuesFetched: false,
            yearFrom: '1970',
            yearTo: '2022',
            type: 'any',
            watchlist: [],
            apiKey: '4ea78e5d',
            url: 'http://www.omdbapi.com/?apikey=',
            page: 1,
            finalUrl: '',
            total: '',
            lazy:[],
            startIndex: 0,
            lastIndex: 10,
            showSpinner: false
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
            state.type = payload.value;
            var toValue = parseInt(state.yearTo);
            var fromValue = parseInt(state.yearFrom);
            var filteredResult = [];
            var yearValue;
            state.filteredData = JSON.parse(JSON.stringify(state.allData));
            filteredResult = state.filteredData.filter(result => {
                if (result.Year.includes('-') > -1) {
                    var splitValue = result.Year.split('-');
                    yearValue = parseInt(splitValue[0]);
                } else {
                    yearValue = parseInt(result.Year);
                }
                if (payload.value === 'any') {
                    if (yearValue >= fromValue && yearValue <= toValue) {
                        return result
                    }
                } else {
                    if (yearValue >= fromValue && yearValue <= toValue && result.Type === payload.value) {
                        return result
                    }
                } 
            });
            state.filteredData = filteredResult;
            state.total = state.filteredData.length;
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
        },
        searchForData(state,payload) {
            if (payload.value) {
                state.allData = payload.data;
                state.filteredData = payload.data;
            }  else {
                state.allData = [];
                state.filteredData = [];
                state.lazy= [];
            }
        },
        updateTotal(state,payload) {
            state.total = payload;
        },
        updatePage(state,payload) {
            if (payload) {
                state.page += 1;
            } else if (!payload) {
                state.page = 1;
            }
        },
        lazyLoadData(state,payload) {
            if (payload) {
                state.lazy = [];
                state.lastIndex = 10;
                state.startIndex = 0;
            }
            if (state.filteredData.length !== state.lazy.length) {
                for (var i=state.startIndex; i < state.lastIndex; i++) {
                    if (state.filteredData[i]) {
                        state.lazy.push(state.filteredData[i]);
                    } else {
                        state.lastIndex = 10;
                        state.startIndex = 0;
                        break;
                    }
                }
                if (state.filteredData.length === state.lazy.length) {
                    state.lastIndex = 10;
                    state.startIndex = 0;
                } else {
                    state.startIndex = state.lastIndex;
                    state.lastIndex += 10;
                }
            }
        },
        alterSpinnerDisplay(state,payload) {
            state.showSpinner = payload;
        }
    },
    actions: {
        updateSearchValue(context,payload) {
            context.commit('updateSearchValue',payload.value);
            context.commit('updatePage',false);
            context.commit('updateTotal', '');
            context.commit('searchForData',{data: [], value: false});
        },
        clearAll(context,payload) {
            context.commit('updateSearchValue',payload);
            context.commit('updatePage',false);
            context.commit('updateTotal', '');
            context.commit('searchForData',{data: [], value: false});
        },
        updateAllFetched(context,payload) {
            context.commit('updateAllFetched',payload.value);
        },
        updateRangeFilter({ dispatch,commit},payload) {
            commit('updateRangeFilter', payload);
            dispatch('lazyLoadData',true);
        },
        updateTypeFilter({dispatch, commit},payload) {
            commit('updateRangeFilter', payload);
            dispatch('lazyLoadData',true);
            
        },
        addToWatchlist(context,payload) {
            context.commit('addToWatchlist', payload);
        },
        removeFromWatchlist(context,payload) {
            context.commit('removeFromWatchlist', payload);
        },
        searchForData({ dispatch,commit,state }) {
            state.finalUrl = state.url + state.apiKey + ('&s=' + state.searchTerm + '&page=' + state.page);
            if (!state.allValuesFetched) {

                axios.get(state.finalUrl).then((response) => {
                    if (response.data.Search) {
                        if (state.allData.length === 0) {
                            commit('searchForData',{data:response.data.Search, value: true});
                            commit('updateTotal',response.data.totalResults);
                            commit('alterSpinnerDisplay',false);
                        } else {
                            commit('searchForData',{data: [...state.allData, ...response.data.Search], value: true});
                            commit('alterSpinnerDisplay',true);
                        }
                        commit('updatePage',true);
                        dispatch('searchForData');
                    } else {
                        commit('updateRangeFilter',{value: state.type, left: state.yearFrom, right: state.yearTo});
                        commit('updateAllFetched',true);
                        commit('alterSpinnerDisplay',false);
                        dispatch('lazyLoadData');
                    }
                });
            } else {
                commit('searchForData',{data: [], value: false});
                commit('updateTotal', '');
            }
        },
        lazyLoadData({ commit},payload) {
            commit('lazyLoadData',payload);
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
        },
        getAllData(state) {
            return state.allData
        },
        getTotal(state) {
            return state.total;
        },
        getFilteredData(state) {
            return state.filteredData
        },
        getLazy(state) {
            return state.lazy;
        },
        getSpinner(state) {
            return state.showSpinner;
        }
    }
});

export default store;