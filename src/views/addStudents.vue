<template>
  <div class="container" style="text-align: center">
    <div class="row">
      <h2>Add a Student</h2>
    </div>
    <br />
    <v-form ref="myForm" v-model="valid" lazy-validation autocomplete="off">
      <v-text-field
        name="studentName"
        v-model="name"
        :rules="nameRules"
        label="Student Name"
        placeholder="Ho Anh Minh"
        required
      >
      </v-text-field>

      <v-text-field
        name="email"
        v-model="email"
        type="email"
        :rules="emailRules"
        label="Email"
        placeholder="something@email.com"
        required
      >
      </v-text-field>
      <v-row align="center">
        <v-col cols="6">
          <v-select
            :items="existingTeams"
            :rules="inputRules"
            label="Pick a Team"
            dense
            v-model="teams"
            required
          ></v-select>
        </v-col>
        <v-col cols="6">
          <v-radio-group
            v-model="gender"
            row
            class="ml-15"
            :rules="[(v) => !!v || 'Item is required']"
            required
          >
            Choose a gender:
            <v-radio label="Female" value="F"></v-radio>
            <v-radio label="Male" value="M"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-btn class="mt-5" :disabled="!valid" @click="submit">Create </v-btn>
    </v-form>
    <br />
    <p>{{ msg }}</p>
    <p>{{ err }}</p>
  </div>
</template>

<script>
// export component
export default {
  name: "PersonsCreate",
  data: function () {
    return {
      dbapi: "http://localhost/vuex/apis.php",
      books: [],
      err: "",
      msg: "",
      valid: true,
      email: "",
      name: "",
      gender: "",
      existingTeams: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5"],
      teams: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => /[a-zA-Z]$/.test(v) || "Letters only",
      ],
      select: [(v) => !!v || "Item is required"],
      inputRules: [
        (v) => v.length >= 3 || "Minimum of 3 characters are required",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.myForm.validate()) {
        this.create(this.name, this.email, this.gender, this.teams);
      }
    },
    // POST
    create: function (name, email, gender, teams) {
      // POST request using fetch with error handling
      var url = this.dbapi;
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          gender: gender,
          teams: teams,
        }),
      };
      fetch(url, requestOptions)
        .then((response) => {
          // TODO: add handling for response.ok
          //turning the response into the usable data
          return response.json();
        })
        .then((data) => {
          //This is the data you wanted to get from url
          this.msg = "You have successfully added a student!";
        })
        .catch((error) => {
          this.err = error;
        });
    },
  },
};
</script>

<style>
input {
  margin: 5px;
}
</style>  