<template>
  <div class="artists">
    <!-- <ul>
      <li v-for="venue in venues" :key="venue">{{venue.venue}}</li>
    </ul> -->

           <h3>Filter By Artist</h3> 
        <select v-model="artist">
            <option v-for="artist in noDuplicatesArtists" :key="artist" :value="artist">{{artist}}</option>
        </select> 
        <ul>
            <li v-for="artist in filtered" :key="artist.videoId">{{artist.artist}} @ {{artist.venue}} {{artist.date}}</li>
        </ul>
        <ul>
</ul>
        {{count}}



  </div>
</template>

<script>
import SetsData from "../assets/sets.json";
export default {
  name: "Artists",
  data: () => {
    return {
      artists: SetsData,
      artist: 'R6013',
    };
  },
  computed: {
    filtered(){
      return this.artists.filter(a => a.artist == this.artist)
    },
    count(){
      return this.artists.filter(a=> a.artist ==this.artist).length;
    },
    noDuplicatesArtists(){
      let arr = [];
      this.artists.forEach(a => arr.push(a.artist));
      return [...new Set(arr)].sort();
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
