<template>
  <div class="ImportSet">
    <h1>Add sets</h1>

    <input v-model="url" v-on:keyup.enter="onSubmit" placeholder="url" />
    <button @click="onSubmit">Add set</button>

    <button @click="saveJSON">Save sets as sets.json</button>

    <!--<p>Preview: {{title}}</p>-->
    <SetCard v-for="set in sets" :set="set" :key="set.videoId" />
    <!-- <ul>
      <li v-for="set in sets" :key="set.videoId">
        {{ set.artist }} @ {{ set.venue }} {{ set.date }}
      </li>
    </ul> -->
  </div>
</template>

<script>
// TODO: <textarea v-model="message" placeholder="add multiple lines"></textarea> 
// í staðinn fyrir <input> til að geta gert mörg sett í einu
import SetCard from "../components/SetCard.vue";
let apiKey = "AIzaSyDE7PtXM5SSPyg5Y-NudKdBMcJ0YasnqDQ";

export default {
  name: "ImportSet",
  components: {
    SetCard,
  },
  data: () => {
    return {
      url: "",
      title: "",
      sets: [],
    };
  },
  computed: {
    getVidId() {
      let id = this.url.split("v=")[1];
      var ampersandPosition = id.indexOf("&");
      if (ampersandPosition != -1) {
        id = id.substring(0, ampersandPosition);
      }
      return id;
    },
  },
  methods: {
    onSubmit() {
      this.getData();
    },
    async getData() {
      let videoId = this.getVidId;
      this.url = '';
      let res = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" +
          videoId +
          "&key=" +
          apiKey
      );
      let data = await res.json();
      let title = data.items[0].snippet.title;
      this.title = title;
      console.log(title);

      let split = title.split(" ");
      let artist = title.split("@")[0].trim();
      let date = split[split.length - 1].trim();
      let venue = title.split("@")[1].replace("@", "").replace(date, "").trim();
      this.sets.push({
        artist,
        venue,
        date,
        videoId,
      });
      console.log(artist, date, venue);
    },
    saveJSON(){ 
      let obj   = this.sets; 
      let data  = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj)); 
 
      let a       = document.createElement('a'); 
      a.href      = 'data:' + data; 
      a.download  = 'sets.json'; 
      // a.innerHTML = 'download .txt file of json'; 
 
      document.getElementById('app').appendChild(a); 
      a.click();
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  -webkit-user-select: text; /* Chrome, Opera, Safari */
  -moz-user-select: text; /* Firefox 2+ */
  -ms-user-select: text; /* IE 10+ */
  user-select: text; /* Standard syntax */
}

li {
  list-style-type: none;
}
</style>