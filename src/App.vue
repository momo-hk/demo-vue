<template>
  <v-app>
    <v-toolbar dark>
      <v-toolbar-items class="item__padding">
        <v-avatar>
          <img src="./assets/vuejs.png" alt="Vue">
        </v-avatar>
        <v-avatar>
          <img src="./assets/logo.png" alt="Vuetify">
        </v-avatar>
      </v-toolbar-items>
      <v-toolbar-title>Simple VueJS application (with Vuetify)</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <student-form></student-form>
  </v-app>
</template>

<script>
import Form from '@/modules/student'
export default {
  data () {
    return {

    }
  },
  name: 'App',
  components: {
    'student-form': Form
  }
}
</script>

<style scoped>
  .item__padding {
    padding-top: 8px;
    padding-bottom: 8px; 
  }
</style>


