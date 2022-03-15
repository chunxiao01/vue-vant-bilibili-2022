import {
  DELETE_HAD_HISTORY_VIEW_LOG,
  ADD_HISTORY_VIEW_LOG
} from "./mutations_types"

export default {
  [DELETE_HAD_HISTORY_VIEW_LOG](state, dataindex) {
    state.historyViewList.splice(dataindex, 1)
  },
  [ADD_HISTORY_VIEW_LOG](state, payload) {
    state.historyViewList.push(payload)
  }
}
