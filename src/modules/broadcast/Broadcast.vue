<template lang="pug">
div.broadcast
  div.title Видео поток из склада
  vue-plyr(ref="plyr")
    video(playsinline)
      source
</template>

<script>
import Hls from 'hls.js';

export default {
  name: 'Broadcast',
  computed: {
    source: () => process.env.VUE_APP_STREAM_ENDPOINT,
  },
  mounted() {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(this.source);
      hls.attachMedia(this.$refs.plyr.player.media);

      window.hls = hls;
    } else {
      console.log('HLS not supported');
    }
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.plyr) {
  margin: 30px 0 50px 0;
  border-radius: 30px;
}

.broadcast {

  .title {
    font-size: 40px;
    font-family: $font-sourceSansPro;
  }

  .stream {
    margin-top: 50px;
  }

}
</style>
