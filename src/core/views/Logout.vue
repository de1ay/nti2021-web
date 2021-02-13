<template>
  <div class="logout"></div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  methods: {
    ...mapActions(['logout']),
  },
  async created() {
    await this.logout();
    this.$router.replace({ name: 'Landing' });
  },
};
</script>

<style lang="scss" scoped>
</style>
