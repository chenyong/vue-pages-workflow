
<template>
  <div>
    <h1>Page about</h1>
    <p>another router</p>
    <router-link :to="{path: '/index.html'}">
      go to home
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'about'
  };
</script>
