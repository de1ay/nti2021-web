<template lang="pug">
router-link.menu-link(
  v-if="!customLink"
  :to="{ name: $props.to, params: $props.params }"
  active-class="menu-link--active") {{ $props.text }}
a.menu-link(v-else :href="customLink") {{ $props.text }}
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
    customLink: {
      type: String,
      default: null,
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
  transition: color .2s ease-in-out;

  &:hover {
    color: $color-primary;
  }

  &--active {
    color: $color-primary;
    text-decoration: underline;
  }

}
</style>
