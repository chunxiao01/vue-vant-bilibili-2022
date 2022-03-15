import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    historyViewList: []
  },
  mutations: {
    deleteHadHistoryViewLog(state, dataindex) {
      state.historyViewList.splice(dataindex, 1)
    },
    addHistoryViewLog(state, payload) {
      state.historyViewList.push(payload)
    }
  },
  actions: {
    addHistoryViewLog(context, payload) {
      for (let i = 0; i < context.state.historyViewList.length; i++) {
        if (state.historyViewList[i].bvid === payload.bvid) {
          context.commit("deleteHadHistoryViewLog", i)
        }
      }
      context.commit("addHistoryViewLog", payload)
    },
    editHistoryViewLog(state, payload) {}
  }
})

export default store
