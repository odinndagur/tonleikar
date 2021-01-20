<template>
  <div class="artist">
    <h1>{{ $route.params.artist }}</h1>
    <ul>
      <li v-for="set in filterArtist" :key="set">
        <button @click="select(set)">select</button>
        <SetCard :set="set" /> <br />
        <youtube v-if="selected == set" :video-id="set.videoId"></youtube>
      </li>
    </ul>
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
      selected:'',
    };
  },
  computed: {
    filterArtist() {
      let tempArr = this.allSets;
      tempArr = tempArr.filter(
        (set) => set.artist == this.$route.params.artist
      );
      return tempArr;
    },
  },
  methods: {
    filter() {
      this.filtered = this.artists.filter(
        (a) => a.artist == this.$route.params.artist
      );
    },
    select(set) {
      if(this.selected == set){
        this.selected = '';
      }
      else{
        this.selected = set;
      }
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
ul{
  list-style-type:none;
}

button{
  float: right;
  width:50px;
}
.set-card {
  display: block;
  margin: auto;
  max-width: 90%;
}
div {
  max-width: 600px;
  margin: auto;
}
</style>
