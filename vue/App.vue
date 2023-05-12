<template>
  <div class="container py-5">
    <p>
      <b-btn variant="primary" block @click="runTest" :disabled="processRunTest">
        запустить Py3 <b-spinner v-if="processRunTest" small></b-spinner>
      </b-btn>
    </p>

    <p v-for="(n,i) in result" :key=i>
      <pre>{{n.json}}</pre>
      <pre>{{n.stderr}}</pre>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      processRunTest: false,
      result: [],
    };
  },
  methods: {
    async runTest() {
      this.processRunTest = true;
      const { data } = await axios.get('/api/v1/hello');
      this.result.unshift(data);
      this.processRunTest = false;
    },
  },
};
</script>
