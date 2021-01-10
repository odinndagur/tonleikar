<template>
  <div class="artists">
    <ul>
      <li v-for="venue in venues" :key="venue">{{venue.venue}}</li>
    </ul>
  </div>
</template>

<script>
import SetsData from "../assets/sets.json";
export default {
  data: () => {
    return {
      venues: SetsData,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
