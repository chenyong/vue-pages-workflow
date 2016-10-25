
<template>
  <div>
    <h1>This is home</h1>
    <p>a router</p>
    <router-link :to="{path: '/about.html'}">
      go to about
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'home'
  };
</script>
