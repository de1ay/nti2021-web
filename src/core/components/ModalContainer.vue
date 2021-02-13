<template lang="pug">
div.modal
  mdicon.modal-close(
    name="close"
    :size="40"
    @click="$emit('close')")
  div.modal-content
    slot
</template>

<script>
export default {
  name: 'Modal',
  emits: ['close'],
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba($color: $color-text, $alpha: 0.95);

  &-close {
    position: absolute;
    top: 25px;
    right: 25px;
    color: $color-surface;
    background-color: transparent;
    border-radius: 100px;
    transition: color .2s ease-in-out,
                background-color .2s ease-in-out;

    &:hover {
      color: $color-text;
      background-color: $color-surface;
      cursor: pointer;
    }

  }

  &-content {
    margin-top: 80px;
    max-width: 1420px;
  }

}
</style>
