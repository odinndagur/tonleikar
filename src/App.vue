<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Artists">Artists</router-link> |
      <router-link to="/Venues">Venues</router-link>
    </div>
    <router-view />
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin-bottom: 5rem;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

  a:link {
  text-decoration: none;
  color:black;
}

a:visited {
  text-decoration: none;
    color:black;
}

a:hover {
  text-decoration: underline;
    color:black;
}

a:active {
  text-decoration: underline;
    color:black;
}
</style>
