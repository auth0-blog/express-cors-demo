<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Express + CORS</span>&nbsp;
        <span class="font-weight-light">Demo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <CallAPI/>
    </v-content>
  </v-app>
</template>

<script>
import CallAPI from "./components/CallApi";

export default {
  name: "App",
  components: {
    CallAPI
  },
  data() {
    return {
      //
    };
  }
};
</script>
