import { UPDATE_CRITERIA, SEARCH_STUDENTS, SHOW_ERROR } from '../_constants/types'

const mutations = {
  [UPDATE_CRITERIA](state, criteria) {
    state.criteria = criteria
  },
  [SEARCH_STUDENTS](state, studentInfo) {
    state.studentInfo = studentInfo
  },
  [SHOW_ERROR](state, error) {
    state.error = error
  }
}

export default mutations