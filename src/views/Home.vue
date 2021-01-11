<template>
  <div class="home">
            <SetCard v-for="set in sets" :key="set.videoId" :set="set"/> <br/>

  </div>
</template>

<script>
// @ is an alias to /src
import SetCard from "@/components/SetCard.vue";

import SetsData from '../assets/sets.json'
export default {
  name: 'Home',
  components: {
    SetCard
  },
  data: () => {
    return {
      sets: SetsData,
    }
  },
}
</script>

<style scoped>
SetCard{
  display:block;
  margin:auto;
  width:50%;
}
</style>
