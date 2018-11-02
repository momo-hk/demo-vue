<template>
  <div>
    <student-search :selection="selectionData" :onSubmit="updateCriteria"/>
    <student-table :schema ="schema" :data="studentInfo" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import StudentSearch from "./_components/StudentSearch"
import StudentTable from "@/modules/table/_components/Table"
import studentDisplaySchema from "./_constants/student-display-schema"
import { getStudentData } from "@/api/student-util.js"

let toArray = map => {
  let arr = []
  map.forEach((value, index) => {
    arr.push({
      label: value,
      key: index
    })
  })
  return arr
};

let selectionData = {
  schoolLevel: toArray(getStudentData("schoolLevel")),
  schoolSession: toArray(getStudentData("schoolSession")),
  classLevel: toArray(getStudentData("classLevel")),
  className: toArray(getStudentData("className"))
};

export default {
  name: "student",
  components: {
    'student-search': StudentSearch,
    'student-table': StudentTable,
  },
  data() {
    return {
      selectionData,
      schema: studentDisplaySchema
    }
  },
  computed: {
    ...mapState({
      criteria: 'criteria',
      studentInfo: 'studentInfo',
    }),
  },
  // get issue when put inside computed()
  methods: {
    ...mapActions({
      updateCriteria: 'updateCriteria',
    }),
  }
};
</script>

