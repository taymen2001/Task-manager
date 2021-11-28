<template>
  <div class="container">
    <div class="row">
      <h2>Student List</h2>
    </div>
    <div class="row">
      <v-simple-table height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Student No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Genders</th>
              <th>Teams</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="student.id" v-for="student in students">
              <td>{{ student.id }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.gender }}</td>
              <td>{{ student.teams }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <br />
      <div class="row">
        <h2>Reassign a team for an existing student</h2>
      </div>
      <v-form
        ref="myForm"
        v-model="valid"
        lazy-validation
        @submit.prevent
        autocomplete="off"
      >
        <v-text-field
          name="studentName"
          v-model="name"
          :rules="nameRules"
          label="Student Name that needs to be reassigned (teams)"
          placeholder="Ho Anh Minh"
          required
        >
        </v-text-field>

        <v-select
          :items="existingTeams"
          label="Pick a Team"
          dense
          v-model="teams"
        ></v-select>

        <v-btn
          class="mt-5"
          :disabled="!valid"
          @click="
            validate;
            updateData(name, teams);
          "
          >Update
        </v-btn>
      </v-form>
      <p>{{ err }}</p>
    </div>
  </div>
</template>

<script>
// export component
export default {
  name: "list",
  data: function () {
    return {
      dbapi: "http://localhost/vuex/apis.php",
      students: [],
      err: "",
      msg: "",
      name: "",
      teams: "",
      existingTeams: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5"],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => /[a-zA-Z]$/.test(v) || "Letters only",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.myForm.validate();
    },
    get: function (url) {
      // GET request using fetch with error handling
      fetch(url)
        .then((response) => {
          //turning the response into the usable data
          // return response.json( );
          if (!response.ok) {
            this.err = response.status;
            return response.ok;
          } else {
            return response.json();
          }
        })
        .then((data) => {
          //This is the data you wanted to get from url
          // console.log('data: ' + data);
          if (!data) {
            // !response.ok
            this.msg = "Unsuccessful!";
          } else {
            this.students = data;
            this.msg = "Successful!";
          }
        })
        .catch((error) => {
          // console.log("error" + error);
          this.err = error;
        });
    },
    updateData: function (nm, teams) {
      // POST request using fetch with error handling
      var url = this.dbapi + "/name/" + nm;
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nm,
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
          this.msg = "successful";
          this.get(this.dbapi);
        })
        .catch((error) => {
          this.err = error;
        });
    },
  },
  created: function () {
    this.get(this.dbapi);
  },
};
</script>
<style>
</style>