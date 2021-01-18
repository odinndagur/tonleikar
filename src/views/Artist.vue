<template>
  <div class="artist">
<h1>{{ $route.params.artist }}</h1>
    <SetCard v-for="set in filterArtist" :key="set" :set="set" /> <br />

<!-- <ul>
  <li v-for="set in filterArtist" :key="set">
      {{set.venue}}
  </li>
</ul> -->
  </div>
</template>

<script>
import SetsData from "../assets/sets.json";
import SetCard from "@/components/SetCard.vue";

export default {
  name: "Artist",
  components: {
    SetCard,
  },
    data: () => {
    return {
      allSets: SetsData,
      filtered: [],
    };
  },
  computed:{
filterArtist(){
        let tempArr = this.allSets;
        tempArr = tempArr.filter((set) => set.artist == this.$route.params.artist);
        return tempArr;
}
  },
  methods: {
            filter() {
      this.filtered = this.artists.filter((a) => a.artist == this.$route.params.artist);
    },
    // count() {
    //   return this.artists.filter((a) => a.artist == this.artist).length;
    // },
    // artist(){
    //   return (this.$route.params.artist);
    // }
  },
};
</script>

<style scoped>
</style>
