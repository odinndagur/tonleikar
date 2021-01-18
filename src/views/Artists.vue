<template>
  <div class="artists">
    <!-- <ul>
      <li v-for="venue in venues" :key="venue">{{venue.venue}}</li>
    </ul> -->
    <ArtistCard v-for="artist in noDuplicatesArtists" :key="artist" :value="artist" :sets="filtered(artist)"/>
    <!-- <h3>Filter By Artist</h3>
    <select v-model="artist">
      <option
        v-for="artist in noDuplicatesArtists"
        :key="artist"
        :value="artist"
      >
        {{ artist }}
      </option>
    </select>
    <ul>
      <li v-for="artist in filtered" :key="artist.videoId">
        {{ artist.artist }} @ {{ artist.venue }} {{ artist.date }}
      </li>
    </ul>
    <ul></ul>
    {{ count }} -->
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
      artist: "R6013",
    };
  },
  computed: {
    count() {
      return this.artists.filter((a) => a.artist == this.artist).length;
    },
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
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
.artistCard {
outline:3px black;
}
</style>
