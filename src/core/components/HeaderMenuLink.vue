<template lang="pug">
router-link.menu-link(
  :to="{ name: $props.to, params: $props.params }"
  active-class="menu-link--active") {{ $props.text }}
</template>

<script>
export default {
  name: 'HeaderMenuLink',
  props: {
    to: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    params: {
      type: Object,
      default: undefined,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-link {
  color: $color-neutralDarkest;
  font-size: 20px;
  font-weight: 600;
  font-family: $font-montserratAlternates;

  &--active {
    color: $color-primary;
    transition: color .2s ease-in-out;
  }

}
</style>
