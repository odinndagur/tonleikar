<template>
  <div class="venues">
        {{venueCount}} venues.
    <ul>
      <li v-for="venue in noDuplicatesVenues" :key="venue" :value="venue">
        <VenueCard class="venueCard" :sets="filtered(venue)"/>
      </li>
    </ul>
  </div>
</template>

<script>
import SetsData from "../assets/sets.json";
import VenueCard from "../components/VenueCard.vue";
import { db } from '../main.js'
export default {
  components: { VenueCard },
  name: "Venues",
  data: () => {
    return {
      venues: SetsData,
      venue: "",
    };
  },
      firestore() {
    return {
      venues: db.collection("videos").orderBy("date"),
    };
  },
  computed: {
    noDuplicatesVenues() {
      let arr = [];
      this.venues.forEach((a) => arr.push(a.venue));
      return [...new Set(arr)].sort();
    },
        venueCount(){
      let arr = [];
      this.venues.forEach((v) => arr.push(v.venue));
      let set = [...new Set(arr)].sort();
      return set.length;
  },
  },
  methods: {
    filtered(venue) {
      return this.venues.filter((v) => v.venue == venue);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
.venueCard {
  outline: 3px black;
  max-width:80%;
  margin:auto;
}
</style>
