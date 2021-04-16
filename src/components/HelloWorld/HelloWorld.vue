<template>
  <img alt="Vue logo" src="/public/logo.png" />
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <button v-on:click="increaseCount">+</button>
  <button v-on:click="decreaseCount">-</button>
  <p>cun is: {{ state.count }}</p>
  <p>Tell <code>ghosty</code> from Discord to fuck off</p>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
const increaseCount = () => {
  state.count++;
};

const decreaseCount = () => {
  state.count--;
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
