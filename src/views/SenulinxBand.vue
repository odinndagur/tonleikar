<template>
  <div class="cinelinx">
      <SenulinxArtistCard v-for="artist in filtered" :key="artist" :artist="artist"></SenulinxArtistCard>
  </div>
</template>

<script>
import data from "../assets/artists.json";
import SenulinxArtistCard from '@/components/SenulinxArtistCard.vue';

export default {
  components: { SenulinxArtistCard },
  name: "Senulinx",
    data: () => {
    return {
      artists: data,
      artist: {},
      filtered: [],
    };
  },
  methods:{
      filter(){
          this.filtered = this.artists.filter(artist => artist.bands.includes(this.$route.params.band));
      }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
.artist-card {
  outline: 3px black;
  max-width:80%;
  margin:auto;
}
</style>
