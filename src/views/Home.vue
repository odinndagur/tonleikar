<template>
  <div class="home">
    <input
      type="checkbox"
      id="filterArtists"
      name="filterArtists"
      v-model="filterArtists"
    />
    <label for="filterArtists">Filter by artist</label>

    <select v-model="selectedArtist">
      <option
        v-for="artist in noDuplicatesArtists"
        :key="artist"
        :value="artist"
      >
        {{ artist }}
      </option>
    </select>

    <br />

    <input
      type="checkbox"
      id="filterVenues"
      name="filterVenues"
      v-model="filterVenues"
    />
    <label for="filterVenues">Filter by venue</label>

    <select v-model="selectedVenue">
      <option v-for="venue in noDuplicatesVenues" :key="venue" :value="venue">
        {{ venue }}
      </option>
    </select>

    <SetCard v-for="set in filtered" :key="set" :set="set" /> <br />
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
    filtered() {
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
SetCard {
  display: block;
  margin: auto;
  width: 50%;
}
div{
  max-width:600px;
  margin:auto;
}
</style>
