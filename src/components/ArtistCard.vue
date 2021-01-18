<template>
  <div class="artistCard">
    <div class="artistHeading">
    <router-link :to="'/artists/' + sets[0].artist"><h2>{{sets[0].artist}}</h2></router-link>
    <h3>{{count}} sets.</h3>
    </div>


      <!-- <a :href="'https://www.youtube.com/watch?v=' + set.videoId"><img :src="'https://img.youtube.com/vi/' + set.videoId + '/default.jpg'" alt="" size="200"></a>
      <p>
        <b>{{set.artist}}</b>
        {{ set.venue }} 
        <i>{{set.date}}</i> -->
      <!-- </p> -->
    <!-- <h2>{{set.artist}} @ {{ set.venue }} {{set.date}}</h2> -->


  </div>
</template>

<script>
export default {
  name: "ArtistCard",
  props: {
    sets: [],
  },
  computed: {
      count() {
          return this.sets.length;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.artistHeading{
    clear: both;
}
.artistHeading h2 {
    float:left;
}
.artistHeading h3 {
    float:right;
}
/* img{
    float:left;
}*/
div{
  text-align: center;
  margin:auto;
  max-width: 600px;
  /* border: 3px solid black; */
  /* margin:2px auto; */
}

div:hover{
    background-color:#F1B4A7
}
/*
h2 {
    display:inline;
    text-align: center;
} */
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
