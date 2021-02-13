<template lang="pug">
div.scroll_up-container(
  v-if="!isHidden"
  @click="scrollUp"
)
  mdicon.scroll_up-icon(
    name="chevronDoubleUp"
    :size="24")
</template>

<script>
export default {
  name: 'ScrollUp',
  data() {
    return {
      isHidden: true,
    };
  },
  methods: {
    scrollUp() {
      window.scrollTo(0, 0);
    },
    scrollListener() {
      this.isHidden = window.scrollY < window.innerHeight;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
.scroll_up-container {
  position: fixed;
  left: 25px;
  bottom: 25px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-primaryDark;
  border-radius: 5px;
  transition: background-color .2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: $color-primary;
  }

}

.scroll_up-icon {
  color: $color-surface;
}
</style>
