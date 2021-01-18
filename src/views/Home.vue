<template>
  <div class="home">
    <SetCard class="set-card" v-for="set in sorted" :key="set" :set="set" /> <br />
  </div>
</template>

<script>
// @ is an alias to /src
import SetCard from "@/components/SetCard.vue";

import SetsData from "../assets/sets.json";
export default {
  name: "Home",
  components: {
    SetCard,
  },
  data: () => {
    return {
      sets: SetsData,
      selectedArtist: "",
      selectedVenue: "",
      filterArtists: false,
      filterVenues: false,
    };
  },
  computed: {
    sorted() {
      let tempArr = this.sets;
      if (this.filterArtists) {
        tempArr = tempArr.filter((set) => set.artist == this.selectedArtist);
      }
      if (this.filterVenues) {
        tempArr = tempArr.filter((set) => set.venue == this.selectedVenue);
      }

      // return tempArr.sort();
      return tempArr.sort((a, b) => {
        let dateA,dateB;
        if(a.date.length <= 4){
          dateA = '' + dateA + '-' + '01-01T00:00';
        }
                if(b.date.length <= 4){
          dateB = '' + dateB + '-' + '01-01T00:00';
        }
        else{
        dateA = a.date.split(".");
        dateB = b.date.split(".");
        if(!dateA[2]){
          dateA[1] = '01';
          dateA[2] = '01';
          dateB[1] = '01';
          dateB[2] = '01';
        }
        dateA = "" + dateA[2] + "-" + dateA[1] + "-" + dateA[0] + "T00:00";
        dateB = "" + dateB[2] + "-" + dateB[1] + "-" + dateB[0] + "T00:00";
        }
        return new Date(dateB) - new Date(dateA);
      });
    },
    noDuplicatesArtists() {
      let arr = [];
      this.sets.forEach((set) => arr.push(set.artist));
      return [...new Set(arr)].sort();
    },
    noDuplicatesVenues() {
      let arr = [];
      this.sets.forEach((set) => arr.push(set.venue));
      return [...new Set(arr)].sort();
    },
    
  },
};
</script>

<style scoped>
.set-card {
  display: block;
  margin: auto;
  max-width: 90%;
}
div{
  max-width:600px;
  margin:auto;
}
</style>
