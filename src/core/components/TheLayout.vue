<template lang="pug">
div.layout
  TheHeader
  router-view
  TheFooter
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheFooter from './TheFooter.vue';

export default {
  name: 'TheLayout',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  max-width: 1420px;
  flex: 1;
}
</style>
