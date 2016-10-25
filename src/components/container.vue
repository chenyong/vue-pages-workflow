
<template>
  <div>
    <h1>Demo app</h1>
    <p>Description here</p>
    <router-view class="view" />
  </div>
</template>

<style>
  body {
    font-family: Verdana, sans-serif;
  }
</style>

<script>
  import Home from './home';
  import About from './about';

  export default {
    name: 'container',
    components: {
      home: Home,
      about: About
    }
  };
</script>
