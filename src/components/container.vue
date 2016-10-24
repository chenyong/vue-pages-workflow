
<template>
  <div>
    <h1>Demo app</h1>
    <p>Description here</p>
    <router-view class="view" />
  </div>
</template>

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
