<template lang="pug">
teleport(to="body")
  modal-container(@close="$emit('close')")
    vue-plyr()
      video(playsinline)
        source(
          :src="require('@assets/videos/development.mp4')"
          type="video/mp4")
</template>

<script>
import ModalContainer from './ModalContainer.vue';

export default {
  name: 'TheDevelopmentVideoModal',
  components: {
    ModalContainer,
  },
  emits: ['close'],
};
</script>

<style lang="scss" scoped>

</style>
