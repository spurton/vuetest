<template>
  <div class="top-stories">
    {{ topStories }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TopStories',
  computed: {
    ...mapGetters([
      'topStories',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
