<template>
  <div class="cinelinx">
<ul>
    <li v-for="person in artists" :key="person">
      <SenulinxArtistCard :artist="person"></SenulinxArtistCard>
    </li>
</ul>
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
      filtered: [],
    };
  },
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
