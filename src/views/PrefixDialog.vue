<template>
  <v-dialog v-model="show" max-width="500">
    <v-layout align-center class="headline gray lighten-2 pl-3 pr-1 py-1">
      <div>Prefix</div>
      <v-spacer>
      </v-spacer>
      <v-btn icon @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-layout>
    <div style="background: #fff; min-height: 500px" class="pa-3">
      <div class="mb-3">A text box will be display for user to type in (Max 24 characters)</div>

      <v-card v-for="(info, i) in extra_info" :key="i" class="pa-5 ma-3">

        <v-layout class="">
          <v-select v-model="info.type" :items="items" label="Type" outlined dense>
          </v-select>

            <v-layout>
              <v-checkbox v-model="info.require" label="Require" dense class="pl-5">
              </v-checkbox>
              <v-btn icon @click="deleteOption[i]" id="close_icon">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-layout>



        </v-layout>

        <v-text-field
            outlined
            dense
            v-model="info.label"
            label="Placeholder"
            counter="24"
            maxlength="24"
        ></v-text-field>

        <v-text-field
            outlined
            dense
            v-model="info.variable"
            label="Variable"
            counter="24"
            maxlength="24"
        ></v-text-field>
      </v-card>
      <v-btn
          small
          color="primary"
          @click="addOption"
          :disabled="extra_info.length >2"
      >Add Option
      </v-btn>
      <!--        <v-text-field-->
      <!--          outlined-->
      <!--          dense-->
      <!--          hide-details-->
      <!--          label="Placeholder"-->
      <!--          v-model="placeholder"-->
      <!--        ></v-text-field>-->
    </div>
    <v-layout style="background: #fff" class="pa-3">
      <v-flex></v-flex>
      <v-btn color="primary" @click="save">Save</v-btn>
    </v-layout>
  </v-dialog>

</template>

<script>
export default {
  name: "PrefixDialog",
  data () {
    return {
      show: false,
      isHidden: false,
      isShow: false,
      promise: null,
      extra_info: [],
      items: ['number', 'text']
    }
  },
  methods: {
    open (extra_info) {
      console.log(this.extra_info)
      this.extra_info = extra_info
      this.show = true
      return new Promise((resolve, reject) => {
        this.promise = {
          resolve,
          reject
        }
      })
    },
    // showMore () {
    //   this.isHidden = !this.isHidden
    // },
    close () {
      this.show = false
      this.isHidden = false
    },
    addOption () {
      this.extra_info.push({type: '', label: '', require: true, variable: ''})
    },
    deleteOption (index) {
      this.extra_info.splice(index, 1)
    },
    save () {
      this.close()
      this.promise.resolve({
        extra_info: this.extra_info
      })
    }
  }
}
</script>

<style scoped>
#close_icon {
  padding: 0 0 24px 24px;
}

</style>