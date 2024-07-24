<script>
export default {
  name: "FiltersView",
  data() {
    return {
      time: Date.now(),
    };
  },
};
</script>

<template>
  <div>
    <MTitle>vue filter</MTitle>
    <p>
      time:{{ time }} | filter('YYYY-MM-DD') :
      {{ time | timeFormat("YYYY-MM-DD") }}
    </p>
  </div>
</template>

<style scoped lang="scss"></style>
