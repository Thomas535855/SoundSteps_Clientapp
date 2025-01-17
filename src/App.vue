<script setup lang="ts">
</script>

<template>
  <nav>
    <div class="nav-content">
      <div class="nav-title">SoundSteps</div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/user/register">Register</router-link>
        <router-link to="/user/SelectInstrument">Select Instrument</router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>



<style lang="scss">
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  align-items: center;
  padding: 15px 30px;
  background-color: #2b2b2b;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  .nav-content {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav-title {
    font-weight: bold;
    font-size: 20px;
    color: #efefef;
  }

  .nav-links {
    display: flex;
    gap: 20px;
  }

  a {
    font-weight: bold;
    color: #efefef;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    text-align: center;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      color: #007acc;
      background-color: rgba(0, 122, 204, 0.1);
    }

    &.router-link-exact-active {
      color: #007acc;
    }
  }
}
</style>