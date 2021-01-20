<template>
  <div class="artists">
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
export default {
  components: { ArtistCard },
  name: "Artists",
  data: () => {
    return {
      artists: SetsData,
      artist: "",
    };
  },
  computed: {
    noDuplicatesArtists() {
      let arr = [];
      this.artists.forEach((a) => arr.push(a.artist));
      return [...new Set(arr)].sort();
    },
  },
  methods: {
    filtered(artist) {
      return this.artists.filter((a) => a.artist == artist);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
.artistCard {
  outline: 3px black;
  max-width:600px;
  margin:auto;
}
</style>
