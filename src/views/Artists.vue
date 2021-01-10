<template>
  <div class="Artists">
    <SetCard msg="Welcome to Your Vue.js App" />
    <ul>
      <li v-for="set in sets" :key="set">
        {{ set.artist }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import SetCard from "@/components/SetCard.vue";
import SetsData from "../assets/sets.json";

export default {
  name: "Artists",
  components: {
    SetCard,
  },
  data: () => {
    return {
      sets: SetsData,
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>