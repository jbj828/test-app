<template>
  <div id="app">
    <button @click="onClick" id="button">Click it!</button>
    <h3 id="message">{{ message }}</h3>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    onClick() {
      this.message = "Awesome!";
    },
  },
};
</script>
