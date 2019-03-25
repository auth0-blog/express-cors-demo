<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-alert
          type="warning"
          class="mb-3"
          :value="apiError"
          outline
        >There was an error calling the API</v-alert>

        <h1>Call an API</h1>
        <p>The purpose of this demo app is to show how cross-origin calls can be made to an API running on a different origin.</p>
        <p>Press the button below to call the API. Without CORS, this call will fail. With CORS correctly set up, a "Hello World" message should be displayed</p>
        <v-btn color="info" @click="callApi">Call API</v-btn>

        <div v-if="result" id="server-response">
          <h2>Result</h2>
          <pre>{{ JSON.stringify(result, {}, 2) }}</pre>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "CallAPI",
  data() {
    return {
      apiError: Boolean,
      result: String
    };
  },
  created() {
    this.apiError = false;
    this.result = null;
  },
  methods: {
    callApi() {
      fetch("//localhost:3001/api/ping")
        .then(async response => {
          if (response.ok) {
            this.apiError = false;
            this.result = await response.json();
          } else {
            this.apiError = true;
          }
        })
        .catch(() => (this.apiError = true));
    }
  }
};
</script>

<style>
#server-response {
  margin-top: 2rem;
}

#server-response pre {
  padding: 20px;
  border: 1px solid #cdcdcd;
  width: auto;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0px 3px 1px 1px #efefef;
}
</style>

