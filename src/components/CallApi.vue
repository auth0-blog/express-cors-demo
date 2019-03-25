<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <h1>Call an API</h1>
        <p>The purpose of this demo app is to show how cross-origin calls can be made to an API running on a different origin.</p>
        <p>Press the button below to call the API. Without CORS, this call will fail. With CORS correctly set up, a "Hello World" message should be displayed</p>
        <v-btn color="info">Call API</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "CallAPI"
};
</script>

