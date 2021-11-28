<template>
  <v-app id="inspire">
    <v-navigation-drawer
    v-model="drawer"
    app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Task Management App
          </v-list-item-title>
          <v-list-item-subtitle>
            Number #! team and task management app in Vietnam
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

     <v-app-bar
      app
      color="indigo darken-2"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Task Manager</v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null,
            items: [
          { title: 'Calender', icon: 'mdi-calendar', to: '/' },
          { title: 'Tasks', icon: 'mdi-format-list-checks', to: '/tasks' },
          { title: 'Student List', icon: 'mdi-account', to: '/studentlist' },
          { title: 'Add a Student', icon: 'mdi-account-plus', to: '/addstudent' },
          { title: 'Assign Teams', icon: 'mdi-account-group', to: '/assignteam' },
          { title: 'About', icon: 'mdi-help-box', to: '/about' }
        ], 
    }),
  }
</script>