<template>
  <div>

      <a :href="'https://www.youtube.com/watch?v=' + set.videoId"><img :src="'https://img.youtube.com/vi/' + set.videoId + '/default.jpg'" alt="" size="200"></a>
      <p>
        <b><router-link :to="'/artists/' + set.artist">{{set.artist}}</router-link></b> <br/>
        <router-link :to="'/venues/' + set.venue">{{ set.venue }} </router-link>
        <i>{{set.date}}</i>

      </p>
                <!-- <button @click="deleteVideo(set)">Delete video</button> -->

    <!-- <h2>{{set.artist}} @ {{ set.venue }} {{set.date}}</h2> -->

  </div>
</template>

<script>
import { db } from "../main";

export default {
  name: "SetCard",
  props: {
    set: Object,
  },
    methods: {
    deleteVideo(video) {
      let vid_query = db.collection('videos').where('videoId','==',video.videoId);
      vid_query.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.delete();
        });
      });
    //   let d = new Date();
    //   db.collection("videos").add({
    //     artist: "lol",
    //     videoId: "lol",
    //     venue: "lol",
    //     date: d,
    //   });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    float:left;
}
div{
      height: 100px;
  text-align: center;
  margin:auto;
  max-width:600px;
}
h2 {
    display:inline;
    text-align: center;
}
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
