<template>
  <div class="container">
    <div class="row">
      <h2>Student List</h2>
    </div>
    <br />
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-4">
            <p>
              <label for="name" class="form-label">Search by Name</label><br />
              <input
                class="form-control"
                type="text"
                id="name"
                v-model="stuObj.name"
              />
            </p>
          </div>
          <div class="col-sm-4">
            <p>
              <label for="email" class="form-label">Search by Email</label
              ><br />
              <input
                class="form-control"
                type="text"
                id="email"
                v-model="stuObj.email"
              />
            </p>
          </div>
          <div class="col-sm-3 form-check">
            <label>Gender</label><br />
            <input
              class="form-check-input"
              type="radio"
              id="male"
              v-model="stuObj.gender"
              value="M"
            />
            <label class="form-check-label" for="male">Male</label><br />
            <input
              class="form-check-input"
              type="radio"
              id="female"
              v-model="stuObj.gender"
              value="F"
            />
            <label class="form-check-label" for="female">Female</label><br />
            <input
              class="form-check-input"
              type="radio"
              id="all"
              v-model="stuObj.gender"
              value=""
            />
            <label for="all">All</label><br />
          </div>
          <v-col cols="12">
            <v-select
              :items="existingTeams"
              label="Pick a Team"
              dense
              v-model="stuObj.teams"
            ></v-select>
          </v-col>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <v-simple-table height="500px">
        <template v-slot:default>
          <thead>
            <tr>
              <th>Student No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Genders</th>
              <th>Teams</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-bind:key="m.id" v-for="m in filterStudents">
              <td>{{ m.id }}</td>
              <td>{{ m.name }}</td>
              <td>{{ m.email }}</td>
              <td>{{ m.gender }}</td>
              <td>{{ m.teams }}</td>
              <td>
                <v-btn
                  @click="deleteData(m.name)"
                  flat
                  icon
                  color="grey lighten-1"
                  left="false"
                >
                  <v-icon>mdi-close-box</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
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
      stuObj: { name: "", email: "", gender: "", teams: "" },
      existingTeams: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", ""],
    };
  },
  methods: {
    // GET
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
    deleteData: function (nm) {
      // POST request using fetch with error handling
      var url = this.dbapi + "/name/" + nm;
      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nm,
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
  computed: {
    filterStudents: function () {
      return this.students.filter(
        (m) =>
          m.name.toLowerCase().match(this.stuObj.name.toLowerCase()) &&
          m.email.toLowerCase().match(this.stuObj.email.toLowerCase()) &&
          m.gender.toLowerCase().match(this.stuObj.gender.toLowerCase()) &&
          m.teams.toLowerCase().match(this.stuObj.teams.toLowerCase())
      );
    },
  },
};
</script>
<style>
</style>