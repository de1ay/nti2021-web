<template lang="pug">
div.layout
  teleport(to="body")
    ScrollUp
  TheHeader
  router-view
  TheFooter
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';
import ScrollUp from './ScrollUp.vue';

export default {
  name: 'TheLayout',
  components: {
    TheHeader,
    TheFooter,
    ScrollUp,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  max-width: 1420px;
  min-width: 1420px;
  flex: 1;
}
</style>
