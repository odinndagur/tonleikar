<template>
  <div>
<button @click="addSet()"></button>

  </div>
</template>

<script>
import { db } from "../main";
import setsData from "../assets/sets.json";
export default {
  name: "FireBaseDot",
  data() {
    return {
      sets: setsData,
      lol: [
        { artist: "1", videoId: "1", venue: "1", date: "July 11, 2020 at 12:00:00 AM UTC"
 },
        { artist: "2", videoId: "2", venue: "2", date: "July 11, 2020 at 12:00:00 AM UTC"
 },
      ],
    };
  },
  firestore() {
    return {
      // sets: db.collection("videos").orderBy("date"),
    };
  },
  methods: {
    addSet() {
      let d = new Date();
      db.collection("videos").add({
        artist: "lol",
        videoId: "lol",
        venue: "lol",
        date: d,
      });
    },
  },
};
</script>

<style scoped>
</style>