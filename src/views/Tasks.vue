<template>
  <div class="home">
    <v-card class="mt-3">
      <taskadder></taskadder>
    </v-card>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-card class="mt-3" v-show="events.length">
          <v-list class="pa-0">
            <template v-for="event in events">
              <v-divider :key="`${event.uid}-divider`"></v-divider>
              <listitem :key="event.uid" :event="event"></listitem>
            </template>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="1"></v-col>

      <v-row justify="center" class="mt-3">
        <v-btn max-width="200px" @click="clearFinished"> clear finished </v-btn>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import taskadder from "../components/taskAdder";
import listitem from "../components/listItem";

const filters = {
  all: (events) => events,
  active: (events) => events.filter((event) => !event.done),
  finished: (events) => events.filter((event) => event.done),
};

export default {
  data() {
    return {
      filters: filters,
    };
  },
  components: {
    listitem: listitem,
    taskadder,
  },

  computed: {
    events() {
      return this.$store.state.events;
    },
    active() {
      return this.events.filter((event) => !event.done).length;
    },
  },
  methods: {
    clearFinished() {
      this.$store.dispatch("clearFinished");
    },
  },
};
</script>
