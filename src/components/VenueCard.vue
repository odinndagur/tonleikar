<template>
  <div class="venueCard">
    <div class="venueHeading">
          <router-link
            :to="'/venues/' + sets[0].venue"
            routerLinkActive="routerLinkActive"
            ><b><span class="venue">{{ sets[0].venue }}</span></b>
            </router-link>
            <span class="count">{{ count }} sets.</span>
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
  name: "VenueCard",
  props: {
    sets: [],
  },
  computed: {
    count() {
      return this.sets.length;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.venueHeading {
  clear: both;
  border-bottom: 1px solid black;
}
.venue {
  float:left;
  font-size:1.2rem;
}
.count{
margin-left:1em;
float:right;
}
/* img{
    float:left;
}*/
.routerLinkActive {
  text-decoration: underline;
}
div {
  text-align: center;
  margin: auto;
  max-width: 600px;
  /* border: 3px solid black; */
  /* margin:2px auto; */
}

h2 {
    display:inline;
    text-align: center;
}
 h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
p{
  padding:none;
  margin:none;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/* a {
  color: #42b983;
}  */
</style>
