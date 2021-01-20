<template>
  <div class="venue">
<h1>{{ $route.params.venue }}</h1>
    <SetCard class="set-card" v-for="set in filterVenue" :key="set" :set="set" /> <br />

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
  name: "Venue",
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
filterVenue(){
        let tempArr = this.allSets;
        tempArr = tempArr.filter((set) => set.venue == this.$route.params.venue);
        return tempArr;
}
  },
  methods: {
            filter() {
      this.filtered = this.artists.filter((a) => a.venue == this.$route.params.venue);
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
