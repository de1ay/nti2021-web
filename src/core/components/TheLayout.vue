<template lang="pug">
div.layout
  TheHeader
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
