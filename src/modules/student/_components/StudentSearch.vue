<template>
  <v-container grid-list-sm>
    <v-card :class="{'form__size': true}">
      <v-card-title primary-title :class="{'form__title': true}">
        <h3>Select/Fill out the criteria to search for student information</h3>
      </v-card-title>
      <v-form v-model="valid" ref="form" lazy-validation :class="{'form__padding': true, 'form__content': true, 'form__font': true}">
        <v-layout row wrap>
            <v-flex xs6>
              <v-text-field 
                label="Student English Name" 
                v-model="model.engName" 
                :rules="rules.englishNameRules"
              ></v-text-field>
            </v-flex>
            <v-flex xs6> 
              <v-text-field 
                label="Student Chinese Name" 
                v-model="model.chiName" 
                :rules="rules.chineseNameRules"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm3>
              <v-select
                label="School Level"
                v-model="model.schLvl"
                :items="selection['schoolLevel']"
                item-text="label"
                item-value="key"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm3>
              <v-select
                label="School Session"
                v-model="model.schScc"
                :items="selection['schoolSession']"
                item-text="label"
                item-value="key"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm3>
              <v-select
                label="Class Level"
                v-model="model.classLvl"
                :items="selection['classLevel']"
                item-text="label"
                item-value="key"
              ></v-select>
            </v-flex>
            <v-flex xs12 sm3>
              <v-select
                label="Class Name"
                v-model="model.classCode"
                :items="selection['className']"
                item-text="label"
                item-value="key"
              ></v-select>
            </v-flex>
            <v-flex xs6> 
              <v-text-field 
                label="Registration Number" 
                v-model="model.regNum"
                :rules="rules.numericRules"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                label="STRN" 
                v-model="model.strn"
              ></v-text-field>
            </v-flex>
            <v-flex sm2 xs12>
              <v-btn @click="submit" :disabled="!valid" color="info">
                submit
              </v-btn>
            </v-flex>
            <v-flex sm1></v-flex>
            <v-flex sm2 xs12>
              <v-btn @click="clear" color="error">
                clear
              </v-btn>
            </v-flex>
        </v-layout>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    model: {},
    rules: {
      chineseNameRules: [
        v => !/[^\u2E80-\u2FD5\u3400-\u4DBF\u4E00-\u9FCC]/g.test(v) || "Only allow Chinese character"
      ],
      englishNameRules: [
        v => !/[^a-zA-Z\u0020]/g.test(v) || "Only allow English characters"
      ],
      numericRules: [
        v => !/[^0-9]+/g.test(v) || "Only allow numeric characters"
      ]
    },
  }),
  props: {
    selection: {
      type: Object,
      required: true
    },
    onSubmit: {
      // type: Function,
      required: true
    }
  },
  methods: {
    submit() {
      this.model && this.onSubmit({...this.model})
    },
    clear() {
      this.$refs.form.reset()
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form__size {
    margin: 10px auto;
    width: 55%;
  }
  .form__padding {
    padding-left: 20px;
    padding-right: 20px;
  }
  .form__content {
    background: #E8EAF6;
    color: gray;
    font-size: 12px;
  }
  .form__title {
    background: #C5CAE9
  }
  .form__font {
    font-size: 12px;
  }

</style>
