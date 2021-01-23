<template>
  <div class="artists">
    {{artistCount}} artists.
    <ul>
      <li v-for="artist in noDuplicatesArtists" :key="artist" :value="artist">
        <ArtistCard class="artistCard" :sets="filtered(artist)"/>
      </li>
    </ul>
  </div>
</template>

<script>
import SetsData from "../assets/sets.json";
import ArtistCard from "../components/ArtistCard.vue";
import { db } from "../main";

export default {
  components: { ArtistCard },
  name: "Artists",
  data: () => {
    return {
      artists: SetsData,
      artist: "",
    };
  },
    firestore() {
    return {
      artists: db.collection("videos").orderBy("date"),
    };
  },
  computed: {
    noDuplicatesArtists() {
      let arr = [];
      this.artists.forEach((a) => arr.push(a.artist));
      return [...new Set(arr)].sort();
    },
    artistCount(){
      let arr = [];
      this.artists.forEach((a) => arr.push(a.artist));
      let set = [...new Set(arr)].sort();
      return set.length;
  },
  },
  methods: {
    filtered(artist) {
      return this.artists.filter((a) => a.artist == artist);
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
}
.artistCard {
  outline: 3px black;
  max-width:80%;
  margin:auto;
}
</style>
