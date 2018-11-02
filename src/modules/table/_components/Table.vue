<template>
  <v-card class="table__size table__search">
    <v-card-title>
      Student Information
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      class="elevation-1 table__row"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.chiName }}</td>
        <td>{{ props.item.engName }}</td>
        <td>{{ props.item.regNum }}</td>
        <td>{{ props.item.strn }}</td>
        <td>{{ props.item.schLvl }}</td>
        <td>{{ props.item.schScc }}</td>
        <td>{{ props.item.classLvl }}</td>
        <td>{{ props.item.classCode }}</td>
      </template>
      
      <template slot="no-data">
        <v-alert :value="true" color="warning" icon="warning">
          No Student found for your criteria :(
        </v-alert>
      </template>

      <v-alert slot="no-results" :value="true" color="warning" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
      
      <template slot="pageText" slot-scope="props">
        Page {{ props.pageStart }} - {{ props.pageStop }} of {{ props.itemsLength }}
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  props: {
    data: {
      type: Array
    },
    schema: {
      type: Map,
      required: true
    }
  },
  methods: {
    displayOnlyRequired: (item, fieldsList) => {
      return fieldsList
        .reduce((newItem, fieldName) => {
          newItem[fieldName] = item[fieldName]
          return newItem
        }, {})
      
    }
  },
  computed: {
    headers() {
      let headerArr = []
      this.schema
        .forEach((tableText, tableValue) => {
          headerArr.push({
            text: tableText,
            value: tableValue,
            align: 'left'
          })
        })
      return headerArr
    },
    items() {
      let itemArr = []
      let fieldsList = [...this.schema.keys()]
      let items = []
      this.data
        .map(item => {
          items.push(this.displayOnlyRequired(item, fieldsList))
        })
      return items;
    }
  }
}
</script>

<style scoped>
  .table__size {
    margin: 10px auto;
    width: 65%;
  }
  .table__search {
    background: #81D4FA
  }
  .table__row {
    background: #B3E5FC
  }
</style>
