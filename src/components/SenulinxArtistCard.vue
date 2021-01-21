<template>
  <div>
  <div class="artistname">
          <router-link
            :to="'/senulinx/artist/' + artist.name"
            routerLinkActive="routerLinkActive"
            ><b><span class="artist">{{ artist.name }}</span></b>
            </router-link>

  </div>
  <div class="bands">
            <ul>
                <li v-for="band in artist.bands" :key="band">
                    <router-link :to="'/senulinx/band/' + band" routerLinkActive="routerLinkActive">
                    <i>{{band}}</i>
                    </router-link>
                </li>
            </ul>
  </div>
  </div>
</template>

<script>
export default {
  name: "ArtistCard",
  props: {
    artist: {},
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
.artistname {
  clear: both;
text-align:center;
      border-top: 4px solid black;
  border-bottom: px solid black;
padding:10px;
}
.bands {
margin:auto;
  font-size: 1.2rem;
  padding-bottom: 10px;
}
ul{
    list-style-type:none;
}
.count {
  margin-left: 1em;
  float: right;
}
div {
  text-align: center;
  margin: auto;
  max-width: 600px;
  /* border: 3px solid black; */
  /* margin:2px auto; */
}
</style>
