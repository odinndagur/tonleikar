<template>
  <div class="Urls">
    <SetCard msg="Urls" />
    <ul>
      <li v-for="url in urls" :key="url">
        {{ url }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import SetCard from "@/components/SetCard.vue";

import SetsData from "../assets/sets.json";
import UrlData from "../assets/showsArray.json";

export default {
  name: "Artists",
  components: {
    SetCard,
  },
  data: () => {
    return {
      sets: SetsData,
      urls: UrlData,
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>