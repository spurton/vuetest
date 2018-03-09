import 'es6-promise/auto'
import Vue from 'vue';
import Vuex from 'vuex';
import backupData from './backupData';

Vue.use(Vuex);

const actions = {
  fetchTopStories({ commit }) {
    const url = (
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.NYTIMES_API_KEY}`
    );
    const request = new Request(url);

    return fetch(request)
      .then(response => response.json())
      .then(parsed => commit('SET_TOP_STORIES', parsed))
      .catch(() => commit('SET_TOP_STORIES', backupData));
  },
};

const mutations = {
  SET_TOP_STORIES(state, value) {
    state.topStories = value;
  },
};

const getters = {
  topStories: state => state.topStories,
}

const state = {
  topStories: null
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
