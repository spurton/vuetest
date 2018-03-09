<template>
  <div class="date-header">
    <h1>
      Top Stories for {{ todaysDate }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'DateHeader',
  data() {
    return {
      today: new Date(),
    };
  },
  computed: {
    todaysDate() {
      const today = this.today;
      const todayFormatted = (
        `${today.getMonth() + 1} / ${today.getDate()} / ${today.getFullYear()}`
      );
      return todayFormatted;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
