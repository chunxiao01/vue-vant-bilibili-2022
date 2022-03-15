import {
  DELETE_HAD_HISTORY_VIEW_LOG,
  ADD_HISTORY_VIEW_LOG
} from "./mutations_types"

export default {
  addHistoryView(context, payload) {
    for (let i = 0; i < context.state.historyViewList.length; i++) {
      if (context.state.historyViewList[i].bvid === payload.bvid) {
        context.commit(DELETE_HAD_HISTORY_VIEW_LOG, i)
      }
    }
    context.commit(ADD_HISTORY_VIEW_LOG, payload)
  },
  editHistoryViewLog(state, payload) {}
}
