import { getStudentsByCriteria } from '@/api/student-info-rest.js'
import { UPDATE_CRITERIA, SEARCH_STUDENTS, SHOW_ERROR } from '../_constants/types'

const actions = {
  updateCriteria({ commit }, criteria) {
    if (criteria) {
      let data = criteria

      // get all students information
      getStudentsByCriteria("all/students", data)
        .then(response => {
          console.log("request URL: ", response.request.responseURL);
          commit(SEARCH_STUDENTS, response.data)
        })
        .catch(error => {
          commit(SHOW_ERROR, error)
        })

        // update search criteria
        commit(UPDATE_CRITERIA, data)
    }
  }
}

export default actions