<template>
  <div class="cinelinx">
      <SenulinxArtistCard :artist="filter()"></SenulinxArtistCard>
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
          return this.artists.filter(artist => artist.name == this.$route.params.artist)[0]
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
