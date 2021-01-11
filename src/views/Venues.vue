<template>
  <div class="artists">
    <!-- <ul>
      <li v-for="venue in venues" :key="venue">{{venue.venue}}</li>
    </ul> -->

           <h3>Filter By Venue</h3> 
        <select v-model="venue">
            <option v-for="venue in noDuplicatesVenues" :key="venue" :value="venue">{{venue}}</option>
            <option value="Norðanpaunk">Norðanpaunk</option>
            <option value="Húrra">Húrra</option>
        </select> 
        <ul>
            <li v-for="venue in filtered" :key="venue.videoId">{{venue.artist}} @ {{venue.venue}} {{venue.date}}</li>
        </ul>
        <ul>
</ul>
        {{count}}



  </div>
</template>

<script>
import SetsData from "../assets/sets.json";
export default {
  name:"Venues",
  data: () => {
    return {
      venues: SetsData,
      venue: 'R6013',
    };
  },
  computed: {
    filtered(){
      return this.venues.filter(v => v.venue == this.venue)
    },
    count(){
      return this.venues.filter(v=> v.venue ==this.venue).length;
    },
    noDuplicatesVenues(){
      let arr = [];
      this.venues.forEach(v => arr.push(v.venue));
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
