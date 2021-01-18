<template>
  <div>
      <a :href="'https://www.youtube.com/watch?v=' + set.videoId"><img :src="'https://img.youtube.com/vi/' + set.videoId + '/default.jpg'" alt="" size="200"></a>
      <p>
        <b><router-link :to="'/artists/' + set.artist">{{set.artist}}</router-link></b> <br/>
        <router-link :to="'/venues/' + set.venue">{{ set.venue }}</router-link>
        <i>{{set.date}}</i>

      </p>
    <!-- <h2>{{set.artist}} @ {{ set.venue }} {{set.date}}</h2> -->

  </div>
</template>

<script>
export default {
  name: "SetCard",
  props: {
    set: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    float:left;
}
div{
      height: 100px;
      max-width: 600px;
  text-align: center;
  margin:auto;
  border:1px dotted black;
}
h2 {
    display:inline;
    text-align: center;
}
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
